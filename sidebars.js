/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workSidebar: [
    'intro',
    'resume',
    'published-cse-docs',
    'docs-engineering/cse-ia-rework-case-study',
    'docs-engineering/ia-model-case-study',
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
