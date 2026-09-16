# Portfolio site starter (Docusaurus)

A ready-to-fill Docusaurus scaffold, structured around three sections: product/conceptual
docs, API reference + tested code samples, and docs engineering case studies (your
PR evaluator, staleness auditor, etc.), plus a blog.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org/) 18+ installed.

```bash
cd portfolio-site
npm install
npm start
```

This opens the site at `http://localhost:3000` with live reload — edit any `.md` file
and watch it update.

## 2. Fill in the real content

Replace these placeholder files with your actual samples:

- `docs/intro.md` — the landing note for the /work section (already mostly real, tweak as needed)
- `docs/product-docs/sample-conceptual-guide.md` — swap in a real conceptual/product doc sample
- `docs/api-docs/sample-api-reference.md` — swap in a real API reference + a code sample you've actually tested
- `docs/docs-engineering/*.md` — fill in the bracketed sections with real numbers/outcomes from your PR evaluator and staleness auditor projects
- `blog/2026-09-14-welcome.md` — replace with a real first post, and add more posts as `blog/YYYY-MM-DD-slug.md`
- `docusaurus.config.js` — replace `YOUR-USERNAME`, `YOUR-PROFILE`, and the `url` field

You can add more docs pages by dropping new `.md` files into the relevant `docs/` subfolder
and adding them to `sidebars.js`.

## 3. Customize the look

- `src/pages/index.js` — homepage hero text and buttons
- `src/css/custom.css` — color palette (currently a placeholder blue — change `--ifm-color-primary`)

## 4. Deploy it (free options)

**Netlify (easiest):**
1. Push this folder to a GitHub repo.
2. Go to netlify.com → "Add new site" → "Import an existing project" → pick the repo.
3. Build command: `npm run build`. Publish directory: `build`.
4. Netlify gives you a free `*.netlify.app` URL immediately; you can attach a custom domain later.

**Vercel:** same idea — import the repo, it auto-detects Docusaurus, deploys on push.

**GitHub Pages:**
1. In `docusaurus.config.js`, set `organizationName` (your GitHub username) and `projectName` (the repo name).
2. Run:
   ```bash
   GIT_USER=<your-github-username> npm run deploy
   ```
3. Enable GitHub Pages on the `gh-pages` branch in the repo settings.

Netlify/Vercel are the lower-friction choice if this is your first time deploying a static site —
both auto-rebuild on every git push, so updating the site later is just "edit markdown, commit, push."

## 5. Once it's live

- Add the URL to your resume header, LinkedIn, and GitHub profile (per the hiring-tips post: this is
  what makes it one click away for a hiring manager skimming an ATS-rendered resume).
- Keep the docs-engineering case studies updated as you build more automation projects —
  that section is your strongest differentiator right now.
