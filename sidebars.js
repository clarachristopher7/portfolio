/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workSidebar: [
    'intro',
    'resume',
    'published-cse-docs',
    {
      type: 'category',
      label: 'Content architecture',
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
        'content-design/service-tunnel-configuration',
        'content-design/ai-prompt-visibility',
      ],
    },
    {
      type: 'category',
      label: 'Automations',
      items: [
        'docs-engineering/pr-evaluator-case-study',
        'docs-engineering/staleness-auditor-case-study',
      ],
    },
  ],
};

module.exports = sidebars;
