# ClipStash Landing

Official product landing page for **ClipStash** (Windows clipboard manager).

Deploy with **GitHub → Cloudflare Pages** (same flow as your other sites).

## Local preview

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

## Before go-live

1. Edit **`config.js`** — set `CLIPSTASH_BUY_URL` to your Lemon Squeezy product/checkout link.
2. Optional: replace the CSS mock UI with real screenshots later (not required for Day 4).

## GitHub + Cloudflare Pages

### 1. Create GitHub repo & push

```bash
cd clipstash-landing
git init
git add .
git commit -m "Add ClipStash landing page"
git branch -M main
# Create empty repo on GitHub named clipstash-landing, then:
git remote add origin https://github.com/YOUR_USER/clipstash-landing.git
git push -u origin main
```

### 2. Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. **Connect to Git** → select `clipstash-landing`
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` or `.`
4. **Save and Deploy**
5. You get: `https://clipstash-landing.pages.dev` (or your project name)

### 3. Optional custom domain

Pages → **Custom domains** → add `clipstash.com` (or subdomain).

## Page purpose

- Day 4–5: product pitch + buy CTA (not a full SEO blog)
- Day 8+: add a separate article page for long-tail SEO if needed
