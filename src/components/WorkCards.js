import React from 'react';
import {HubGroup, HubCard} from './Hub';

// One source for the work cards, so the homepage and the section
// overview pages always describe each piece the same way.
const SETS = {
  contentDesign: [
    {to: '/content-design/device-geolocation-trust-factor', tag: 'Security setting',
      title: 'Device location rule', img: '/img/content-design/device-geolocation-after.png',
      imgAlt: 'Geolocation trust factor configuration with the effect stated in a sentence',
      go: 'See the before and after',
      text: 'Admins block devices by country. The screen never said which way the rule worked.'},
    {to: '/content-design/ai-prompt-visibility', tag: 'Setup flow',
      title: 'AI prompt logging', img: '/img/content-design/ai-prompt-after.png',
      imgAlt: 'AI prompt visibility toggle with the required policy setting embedded in the modal',
      go: 'See the proposal',
      text: 'Turning on AI logging needed a second setting on another screen. I proposed one screen.'},
    {to: '/content-design/domain-lookup-tool', tag: 'Troubleshooting',
      title: 'Website lookup tool', img: '/img/content-design/domain-lookup-tool.png',
      imgAlt: 'Domain Lookup Tool showing which policy rule decided a domain',
      go: 'See the tool',
      text: 'Admins couldn’t see why a website was blocked. Now they type it in and get the answer.'},
  ],
  architecture: [
    {to: '/docs-engineering/cse-ia-rework-case-study', icon: 'route', tag: 'Navigation',
      title: 'Reorganizing the Cloud Secure Edge docs', go: 'See what changed',
      text: 'A help site organized by product part, reorganized around what readers are trying to do.'},
    {to: '/docs-engineering/ia-model-case-study', icon: 'grid', tag: 'Across products',
      title: 'Organizing docs across many products', go: 'See the map',
      text: 'One map that checks every product’s docs against the same idea of complete.'},
  ],
  docs: [
    {to: 'https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/', icon: 'globe', tag: 'Architecture',
      title: 'How Internet Threat Protection works', go: 'Open the live page',
      text: 'Traces, step by step, where a harmful website actually gets blocked.'},
    {to: 'https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/', icon: 'plug', tag: 'Integration',
      title: 'Send security events to a logging tool', go: 'Open the live page',
      text: 'A full setup guide for a popular logging tool, with settings you can copy.'},
    {to: 'https://cse-docs.sonicwall.com/docs/trust-scoring/', icon: 'gauge', tag: 'Concepts',
      title: 'Device trust scoring', go: 'Open the live page',
      text: 'Four terms that sound alike, each defined once and kept distinct.'},
  ],
  automations: [
    {to: '/docs-engineering/pr-evaluator-case-study', icon: 'git', tag: 'Automatic check',
      title: 'Docs change checker', go: 'See how it works',
      text: 'Checks recent product changes against the docs and lists pages that look out of date.'},
    {to: '/docs-engineering/staleness-auditor-case-study', icon: 'clock', tag: 'Audit',
      title: 'Outdated page finder', go: 'See how it works',
      text: 'Checks every help page against the latest product and ranks what to fix first.'},
  ],
};

export default function WorkCards({set, label, columns}) {
  const cards = SETS[set] || [];
  return (
    <HubGroup label={label} columns={columns || (cards.length === 2 ? 2 : 3)}>
      {cards.map(({text, ...c}) => (
        <HubCard key={c.to} {...c}>{text}</HubCard>
      ))}
    </HubGroup>
  );
}
