"""Simple article extraction utilities for the crawl API."""
from __future__ import annotations

import json
import re
from dataclasses import dataclass
from typing import Dict, Iterable, Optional, Set
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as to_markdown


USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15"
)


class ExtractionError(RuntimeError):
    """Raised when article extraction fails."""


@dataclass
class Article:
    url: str
    title: str
    description: str
    image: str
    category: str
    content_html: str

    @property
    def content_md(self) -> str:
        return to_markdown(self.content_html)

    def as_dict(self) -> Dict[str, str]:
        data = {
            "url": self.url,
            "title": self.title,
            "description": self.description,
            "image": self.image,
            "category": self.category,
            "content_html": self.content_html,
            "content_md": self.content_md,
        }
        return data


def _first_match(soup: BeautifulSoup, selectors: Iterable[str]) -> Optional[str]:
    for selector in selectors:
        if not selector:
            continue
        el = soup.select_one(selector)
        if el:
            text = el.get_text(" ", strip=True)
            if text:
                return text
    return None


def _first_attr(soup: BeautifulSoup, selectors: Iterable[str], attr: str) -> Optional[str]:
    for selector in selectors:
        if not selector:
            continue
        el = soup.select_one(selector)
        if el:
            value = el.get(attr)
            if value:
                return value
    return None


def _extract_meta(soup: BeautifulSoup, *names: str) -> Optional[str]:
    for name in names:
        tag = soup.find("meta", attrs={"name": name})
        if tag and tag.get("content"):
            return tag["content"].strip()
        tag = soup.find("meta", attrs={"property": name})
        if tag and tag.get("content"):
            return tag["content"].strip()
    return None


def _load_selector_list(value: Optional[Iterable[str]]) -> Iterable[str]:
    if not value:
        return []
    result: Iterable[str]
    if isinstance(value, str):
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list):
                result = [str(v) for v in parsed]
            else:
                result = [str(value)]
        except json.JSONDecodeError:
            result = [value]
    else:
        result = [str(v) for v in value]
    return result


def _collect_allowed_domains(selectors: Dict[str, Dict[str, Iterable[str]]]) -> Set[str]:
    allowed: Set[str] = set()
    special_keys = {"_allowed_domains", "allowed_domains"}
    for key, value in selectors.items():
        if isinstance(value, dict) and key not in special_keys:
            allowed.add(key.lower())

    extra = selectors.get("_allowed_domains") or selectors.get("allowed_domains")
    if isinstance(extra, (list, tuple, set)):
        for item in extra:
            if item:
                allowed.add(str(item).lower())
    elif isinstance(extra, str):
        allowed.add(extra.lower())

    return allowed


def _is_trusted_host(hostname: Optional[str], allowed_domains: Set[str]) -> bool:
    if not hostname:
        return False

    normalized = hostname.lower().rstrip(".")
    for domain in allowed_domains:
        domain = domain.strip().lower().rstrip(".")
        if not domain:
            continue
        if normalized == domain or normalized.endswith(f".{domain}"):
            return True
    return False


def extract_article(url: str, selectors: Dict[str, Dict[str, Iterable[str]]]) -> Dict[str, str]:
    if not url:
        raise ExtractionError("URL is required")

    parsed_url = urlparse(url)
    if parsed_url.scheme not in {"http", "https"}:
        raise ExtractionError("Unsupported URL scheme")

    allowed_domains = _collect_allowed_domains(selectors)
    if not allowed_domains:
        raise ExtractionError("No trusted domains configured for extraction")
    if not _is_trusted_host(parsed_url.hostname, allowed_domains):
        raise ExtractionError("URL is not in the trusted allowlist")

    headers = {"User-Agent": USER_AGENT}
    response = requests.get(url, headers=headers, timeout=15)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")
    domain = parsed_url.netloc
    domain_selectors = selectors.get(domain, {})

    title = _first_match(
        soup,
        _load_selector_list(domain_selectors.get("title"))
        or ["h1", "title"],
    )
    if not title:
        title = _extract_meta(soup, "og:title", "twitter:title") or ""

    description = _first_match(
        soup,
        _load_selector_list(domain_selectors.get("description"))
        or [],
    ) or _extract_meta(soup, "description", "og:description", "twitter:description") or ""

    image = _first_attr(
        soup,
        _load_selector_list(domain_selectors.get("image"))
        or [],
        "src",
    ) or _extract_meta(soup, "og:image", "twitter:image") or ""

    category = _first_match(
        soup,
        _load_selector_list(domain_selectors.get("category"))
        or [],
    ) or ""

    content_html = ""
    content_selectors = _load_selector_list(domain_selectors.get("content"))
    for selector in content_selectors or ("article", "main", "body"):
        el = soup.select_one(selector)
        if el:
            content_html = el.decode_contents().strip()
            break

    if not content_html:
        paragraphs = soup.find_all("p")
        text_parts = [p.get_text(" ", strip=True) for p in paragraphs]
        text = "\n\n".join(part for part in text_parts if part)
        if text:
            content_html = "<p>" + "</p><p>".join(re.split(r"\n\n+", text)) + "</p>"

    if not title and not content_html:
        raise ExtractionError("Unable to extract article content")

    article = Article(
        url=url,
        title=title or url,
        description=description,
        image=image,
        category=category,
        content_html=content_html or "",
    )

    return article.as_dict()


__all__ = ["extract_article", "ExtractionError", "Article"]
