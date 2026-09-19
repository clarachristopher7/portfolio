// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clara Christopher — Senior Technical Writer',
  tagline: 'Narrative-driven documentation for cloud infrastructure and cybersecurity platforms — plus the AI-powered automation that keeps it accurate',
  favicon: 'img/favicon.ico',

  // TODO: replace with your real domain once you pick a host (Netlify/Vercel/GitHub Pages)
  url: 'https://your-site.example.com',
  baseUrl: '/',

  // If deploying to GitHub Pages under a project repo, set these:
  // organizationName: 'your-github-username',
  // projectName: 'portfolio',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'work', // makes the docs section live at /work instead of /docs
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Clara Christopher',
        items: [
          {to: '/work/intro', label: 'Work', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG', label: 'LinkedIn', position: 'right'},
          {href: 'mailto:clara.christopher56@gmail.com', label: 'Email', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Elsewhere',
            items: [
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG'},
              {label: 'Email', href: 'mailto:clara.christopher56@gmail.com'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clara Christopher`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
