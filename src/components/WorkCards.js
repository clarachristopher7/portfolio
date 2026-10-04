import React from 'react';
import {HubGroup, HubCard} from './Hub';

// One source for the work cards, so the homepage and the section
// overview pages always describe each piece the same way.
const SETS = {
  contentDesign: [
    {to: '/content-design/device-geolocation-trust-factor', tag: 'Interface copy',
      title: 'Geolocation trust factor', img: '/img/content-design/device-geolocation-after.png',
      imgAlt: 'Geolocation trust factor configuration with the effect stated in a sentence',
      go: 'See the before and after',
      text: 'A country-based access rule whose screen never stated what the rule did. A clearer label, an explicit rule, and a layout that follows the admin’s reasoning.'},
    {to: '/content-design/ai-prompt-visibility', tag: 'Setup flow',
      title: 'AI prompt visibility', img: '/img/content-design/ai-prompt-after.png',
      imgAlt: 'AI prompt visibility toggle with the required policy setting embedded in the modal',
      go: 'See the proposal',
      text: 'A logging feature that appeared enabled but captured nothing until a setting on another screen was configured. A proposal to bring that setting into the same flow.'},
    {to: '/content-design/domain-lookup-tool', tag: 'Troubleshooting',
      title: 'Domain Lookup Tool', img: '/img/content-design/domain-lookup-tool.png',
      imgAlt: 'Domain Lookup Tool showing which policy rule decided a domain',
      go: 'See the tool',
      text: 'Admins could not tell which part of a security policy had blocked a website. A lookup built into the policy now answers directly.'},
  ],
  architecture: [
    {to: '/docs-engineering/cse-ia-rework-case-study', icon: 'route', tag: 'Navigation',
      title: 'Cloud Secure Edge information architecture', go: 'See what changed',
      text: 'Documentation organized around product components, restructured around the tasks readers come to complete, without breaking a single link.'},
    {to: '/docs-engineering/ia-model-case-study', icon: 'grid', tag: 'Portfolio model',
      title: 'Information architecture across a product portfolio', go: 'See the model',
      text: 'A single model that assesses every product’s documentation against the same definition of completeness.'},
  ],
  docs: [
    {to: 'https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/', icon: 'globe', tag: 'Architecture',
      title: 'Internet Threat Protection architecture', go: 'Open the live page',
      text: 'How the service decides whether a website request is allowed, and where that decision is enforced, component by component.'},
    {to: 'https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/', icon: 'plug', tag: 'Integration',
      title: 'Forwarding security events to the Elastic Stack', go: 'Open the live page',
      text: 'An end-to-end procedure for sending Cloud Secure Edge security events to Elasticsearch, Logstash, and Kibana, with configuration ready to copy.'},
    {to: 'https://cse-docs.sonicwall.com/docs/trust-scoring/', icon: 'gauge', tag: 'Concepts',
      title: 'Trust scoring', go: 'Open the live page',
      text: 'Defines four closely related terms (trust factor, trust effect, trust profile, and trust level) and shows how they combine into a single decision about a device.'},
  ],
  automations: [
    {to: '/docs-engineering/pr-evaluator-case-study', icon: 'git', tag: 'Scheduled job',
      title: 'Documentation impact evaluator', go: 'See how it works',
      text: 'Compares recent code changes with the documentation and reports which pages they have likely made inaccurate.'},
    {to: '/docs-engineering/staleness-auditor-case-study', icon: 'clock', tag: 'Audit',
      title: 'Documentation staleness auditor', go: 'See how it works',
      text: 'Cross-references the documentation against each new console release and produces a maintenance backlog ranked by impact.'},
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
