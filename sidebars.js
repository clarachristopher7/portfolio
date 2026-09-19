/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Product & Conceptual Docs',
      items: ['product-docs/sample-conceptual-guide'],
    },
    {
      type: 'category',
      label: 'Content Design',
      items: [
        'content-design/microcopy-rewrites',
        'content-design/product-flow-strings',
      ],
    },
    {
      type: 'category',
      label: 'API Reference & Code Samples',
      items: ['api-docs/sample-api-reference'],
    },
    {
      type: 'category',
      label: 'Docs Engineering Case Studies',
      items: [
        'docs-engineering/pr-evaluator-case-study',
        'docs-engineering/staleness-auditor-case-study',
      ],
    },
  ],
};

module.exports = sidebars;
