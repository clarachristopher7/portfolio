// Writes build/llms-full.txt: the readable text of every page, so AI tools
// can read the whole portfolio in one request. Runs after `docusaurus build`.
import fs from 'node:fs';
import path from 'node:path';

const BUILD = path.resolve('build');
const decode = (s) => s
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));

function pageText(html) {
  const m = html.match(/<article[\s\S]*?<\/article>/);
  if (!m) return '';
  let a = m[0]
    .replace(/<(script|style|svg|nav|footer)\b[\s\S]*?<\/\1>/g, '')
    .replace(/<a[^>]*class="hash-link"[^>]*>[\s\S]*?<\/a>/g, '')
    .replace(/<(span class="go"|a class="btn-hub)/g, '\n$&')
    .replace(/<span class="hub-tag"[^>]*>([\s\S]*?)<\/span>/g, '\n($1)\n')
    .replace(/<img[^>]*alt="([^"]+)"[^>]*>/g, '\n[Image: $1]\n')
    .replace(/<img[^>]*>/g, '')
    .replace(/<h([1-6])[^>]*>/g, (_, n) => '\n\n' + '#'.repeat(Number(n)) + ' ')
    .replace(/<\/h[1-6]>/g, '\n')
    .replace(/<li[^>]*>/g, '\n- ')
    .replace(/<tr[^>]*>/g, '\n|').replace(/<\/t[dh]>/g, ' |')
    .replace(/<(p|div|br|table|ul|ol|figure|figcaption)[^>]*>/g, '\n')
    .replace(/<[^>]+>/g, '');
  a = decode(a).replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/\n{3,}/g, '\n\n');
  return a.trim();
}

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'assets' && e.name !== 'img') walk(p);
    else if (e.name === 'index.html') pages.push(p);
  }
})(BUILD);

const order = ['', 'intro', 'resume', 'content-design', 'docs-engineering', 'automations', 'published-cse-docs', 'blog', 'contact'];
const rank = (p) => { const r = path.relative(BUILD, path.dirname(p)); const i = order.findIndex((o) => o && r.startsWith(o)); return r === '' ? -1 : (i < 0 ? 99 : i); };
pages.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

let out = '# Clara Christopher: full portfolio text\n\nContent designer and technical writer for networking, application, and cloud security products.\n';
for (const p of pages) {
  const text = pageText(fs.readFileSync(p, 'utf8'));
  if (!text) continue;
  const url = '/' + path.relative(BUILD, path.dirname(p)).split(path.sep).join('/');
  out += `\n\n---\n\nSource: ${url === '/' ? '/' : url + '/'}\n\n${text}\n`;
}
fs.writeFileSync(path.join(BUILD, 'llms-full.txt'), out);
console.log(`llms-full.txt: ${pages.length} pages, ${out.split(/\s+/).length} words`);
