# ngoctay-io

This repository contains the source code for the **ngoctay.io** website, built with Next.js 14.

## Local development

```bash
npm install
npm run dev
```

## Deploying to Cloudflare Pages

1. Authenticate Wrangler if you have not already:
   ```bash
   npx wrangler login
   ```
2. Build the site. The `postbuild` step automatically runs `@cloudflare/next-on-pages` to produce the Cloudflare-compatible output under `.vercel/output/`:
   ```bash
   npm run cf:build
   ```
3. Deploy to production:
   ```bash
   npm run cf:deploy
   ```
   This pushes the build to the `ngoctay-io` Cloudflare Pages project and uploads the generated server functions from `.vercel/output/functions`.
4. (Optional) Deploy a preview build:
   ```bash
   npm run cf:preview
   ```
   This publishes the current commit to a `preview` branch in Cloudflare Pages.

When configuring the Cloudflare Pages project in the dashboard, use `npm run build` as the build command and `.vercel/output/static` as the build output directory. Set the functions directory to `.vercel/output/functions`.

## Environment

The deployment targets the Workers runtime with Node.js compatibility enabled (see `wrangler.toml`). Ensure your project is configured with the desired environment variables in the Cloudflare Pages dashboard before deploying.
