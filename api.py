from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from crawler_core import extract_article

app = Flask(__name__)
# Cho phép gọi API từ website chính
CORS(app, origins=["https://ngoctay.io.vn", "https://ngoctay-io.pages.dev"])

# Đọc file site_selectors.json (nếu không có thì dùng dict rỗng)
try:
    with open("site_selectors.json", "r", encoding="utf-8") as f:
        SELECTORS = json.load(f)
except Exception:
    SELECTORS = {}


@app.route("/crawl", methods=["POST"])
def crawl_api():
    data = request.get_json(force=True)
    url = data.get("url", "").strip()
    if not url:
        return jsonify({"error": "Thiếu URL"}), 400

    try:
        art = extract_article(url, SELECTORS)
        if not art:
            return jsonify({"error": "Không lấy được nội dung"}), 500
        # Lọc gọn để trả về JSON gọn nhẹ
        resp = {
            "url": art["url"],
            "title": art["title"],
            "description": art["description"],
            "image": art["image"],
            "category": art["category"],
            "content_html": art["content_html"],
            "content_md": art["content_md"],
        }
        return jsonify(resp)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
