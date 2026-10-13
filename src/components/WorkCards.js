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
      text: 'The screen asked admins to pick countries but never said what the rule would actually do. I rewrote the copy so it does, and put the screen in the order you’d work through it.'},
    {to: '/content-design/ai-prompt-visibility', tag: 'Setup flow',
      title: 'AI prompt visibility', img: '/img/content-design/ai-prompt-after.png',
      imgAlt: 'AI prompt visibility toggle with the required policy setting embedded in the modal',
      go: 'See the proposal',
      text: 'Logging looked like it was on, but it couldn’t capture anything until you changed a setting on another screen. I proposed putting that setting where you’d need it.'},
    {to: '/content-design/domain-lookup-tool', tag: 'Troubleshooting',
      title: 'Domain Lookup Tool', img: '/img/content-design/domain-lookup-tool.png',
      imgAlt: 'Domain Lookup Tool showing which policy rule decided a domain',
      go: 'See the tool',
      text: 'When a site got blocked, admins couldn’t tell which rule did it. I suggested a lookup built right into the policy, so they can just ask.'},
  ],
  architecture: [
    {to: '/docs-engineering/cse-ia-rework-case-study', icon: 'route', tag: 'Navigation',
      title: 'Cloud Secure Edge information architecture', go: 'See what changed',
      text: 'The docs were organized the way the product is built. I reorganized them around what you’re actually trying to do, without breaking a single link.'},
    {to: '/docs-engineering/ia-model-case-study', icon: 'grid', tag: 'Portfolio model',
      title: 'Information architecture across a product portfolio', go: 'See the model',
      text: 'Every product’s docs had grown up on their own. I built a way to measure them all against the same definition of complete.'},
  ],
  docs: [
    {to: 'https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/', icon: 'globe', tag: 'Architecture',
      title: 'Internet Threat Protection architecture', go: 'Open the live page',
      text: 'Where a website request gets checked, where it gets blocked, and which part of the system does each.'},
    {to: 'https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/', icon: 'plug', tag: 'Integration',
      title: 'Forwarding security events to the Elastic Stack', go: 'Open the live page',
      text: 'How to send Cloud Secure Edge security events to Elasticsearch, Logstash, and Kibana, with configuration you can copy.'},
    {to: 'https://cse-docs.sonicwall.com/docs/trust-scoring/', icon: 'gauge', tag: 'Concepts',
      title: 'Trust scoring', go: 'Open the live page',
      text: 'Four terms that sound almost the same (trust factor, trust effect, trust profile, and trust level), and how they add up to one decision about a device.'},
  ],
  automations: [
    {to: '/docs-engineering/pr-evaluator-case-study', icon: 'git', tag: 'Scheduled job',
      title: 'Documentation impact evaluator', go: 'See how it works',
      text: 'A scheduled job that reads recent code changes and tells the docs team which pages they probably broke.'},
    {to: '/docs-engineering/staleness-auditor-case-study', icon: 'clock', tag: 'Audit',
      title: 'Documentation staleness auditor', go: 'See how it works',
      text: 'Checks the docs against each new version of the admin console, then hands you a backlog sorted by impact.'},
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
