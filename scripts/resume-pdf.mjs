// Prints the built resume page to static/Clara-Christopher-Resume.pdf (and
// build/, so a fresh build doesn't need a second run). The page's print
// stylesheet does the layout, so the PDF always matches the web resume.
//
//   npm run build && npm run resume:pdf
//
// It refuses to run while docs/resume.md still has DRAFT placeholders.
// Pass --drafts to make a preview anyway, stamped as a draft.
// Uses a local Chrome or Chromium. Set CHROME_PATH if it can't find one.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {chromium} from 'playwright-core';

const BUILD = path.resolve('build');
const OUT = 'Clara-Christopher-Resume.pdf';
const allowDrafts = process.argv.includes('--drafts');

const source = fs.readFileSync('docs/resume.md', 'utf8');
const drafts = source.split('\n').filter((l) => /\{\/\*\s*DRAFT/.test(l));
if (drafts.length && !allowDrafts) {
  console.error(`docs/resume.md still has ${drafts.length} DRAFT placeholder(s):`);
  for (const l of drafts) console.error('  ' + l.replace(/^- /, '').slice(0, 90) + '…');
  console.error('Confirm or rewrite them, delete the comments, and run this again. Or pass --drafts for a preview.');
  process.exit(1);
}
if (!fs.existsSync(path.join(BUILD, 'resume', 'index.html'))) {
  console.error('No build found. Run `npm run build` first.');
  process.exit(1);
}

// Serve the build so the page's root-relative CSS and font links resolve.
const TYPES = {'.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml'};
const server = http.createServer((req, res) => {
  let p = path.join(BUILD, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(BUILD)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) { res.writeHead(404).end(); return; }
  res.writeHead(200, {'content-type': TYPES[path.extname(p)] || 'application/octet-stream'});
  fs.createReadStream(p).pipe(res);
}).listen(0);
const {port} = server.address();

const candidates = [process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'];
const executablePath = candidates.find((c) => c && fs.existsSync(c));
const browser = await chromium.launch(executablePath ? {executablePath} : {channel: 'chrome'});
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/resume/`, {waitUntil: 'networkidle'});
  // Links to other pages of the portfolio need the site's real address in
  // a PDF. Until the config has one, print them as plain text instead.
  const site = (fs.readFileSync('docusaurus.config.js', 'utf8').match(/^\s*url:\s*'([^']+)'/m) || [])[1] || '';
  const live = site && !/example\.com/.test(site) ? site.replace(/\/$/, '') : '';
  await page.evaluate(({origin, live}) => {
    document.querySelector('.resume-download')?.remove();
    for (const a of document.querySelectorAll('.markdown a[href]')) {
      if (!a.href.startsWith(origin)) continue;
      if (live) { a.href = live + new URL(a.href).pathname; continue; }
      // The "Portfolio" link means nothing without an address, so drop it
      // with the separator before it.
      if (new URL(a.href).pathname === '/') {
        const prev = a.previousSibling;
        if (prev && prev.nodeType === 3) prev.textContent = prev.textContent.replace(/\s*·\s*$/, '');
        a.remove();
      } else a.replaceWith(...a.childNodes);
    }
  }, {origin: `http://localhost:${port}`, live});
  if (!live) console.warn('No site URL in docusaurus.config.js yet, so links to portfolio pages are printed as plain text.');
  if (drafts.length) {
    await page.evaluate(() => {
      const b = document.createElement('div');
      b.className = 'resume-draft-banner';
      b.textContent = 'DRAFT. Some outcomes on this resume are placeholders and not yet confirmed.';
      b.style.cssText = 'background:#fff3b0;border:1pt solid #e0b400;padding:4pt 8pt;margin-bottom:6pt;font:600 9pt Arial,sans-serif;color:#5c4400';
      document.querySelector('.markdown').prepend(b);
    });
  }
  const pdf = await page.pdf({preferCSSPageSize: true, printBackground: true, tagged: true, outline: false});
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  for (const dir of ['static', BUILD]) fs.writeFileSync(path.join(dir, OUT), pdf);
  console.log(`${OUT}: ${pages} page(s), ${Math.round(pdf.length / 1024)} KB${drafts.length ? ', marked DRAFT' : ''}`);
  if (pages > 1) console.warn('Warning: the resume runs past one page.');
} finally {
  await browser.close();
  server.close();
}
