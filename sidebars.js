/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workSidebar: [
    {type: 'doc', id: 'index', label: 'Home'},
    {type: 'html', value: 'About', className: 'sidebar-band', defaultStyle: false},
    'intro',
    'resume',
    'contact',
    {type: 'html', value: 'Work', className: 'sidebar-band', defaultStyle: false},
    'published-cse-docs',
    {
      type: 'category',
      label: 'Content architecture',
      link: {type: 'doc', id: 'content-architecture'},
      items: [
        'docs-engineering/cse-ia-rework-case-study',
        'docs-engineering/ia-model-case-study',
      ],
    },
    {
      type: 'category',
      label: 'Content design',
      link: {type: 'doc', id: 'content-design/overview'},
      items: [
        'content-design/device-geolocation-trust-factor',
        'content-design/ai-prompt-visibility',
        'content-design/domain-lookup-tool',
      ],
    },
    {
      type: 'category',
      label: 'Automations',
      link: {type: 'doc', id: 'automations'},
      items: [
        'docs-engineering/pr-evaluator-case-study',
        'docs-engineering/staleness-auditor-case-study',
      ],
    },
    {type: 'html', value: 'Writing', className: 'sidebar-band', defaultStyle: false},
    {
      type: 'category',
      label: 'Blog',
      link: {type: 'doc', id: 'blog/index'},
      items: ['blog/future-of-technical-writing-generative-ai'],
    },
  ],
};

module.exports = sidebars;
