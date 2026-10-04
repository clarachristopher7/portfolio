import React from 'react';
import {HubGroup, HubCard} from './Hub';

// One source for the work cards, so the homepage and the section
// overview pages always describe each piece the same way.
const SETS = {
  contentDesign: [
    {to: '/work/content-design/device-geolocation-trust-factor', tag: 'Trust factor',
      title: 'Device Geolocation', img: '/img/content-design/device-geolocation-after.png',
      imgAlt: 'Geolocation trust factor configuration with the effect stated in a sentence',
      go: 'See the before and after',
      text: 'The screen showed every input but never said what rule they added up to.'},
    {to: '/work/content-design/ai-prompt-visibility', tag: 'Setup flow',
      title: 'AI prompt visibility', img: '/img/content-design/ai-prompt-after.png',
      imgAlt: 'AI prompt visibility toggle with the required policy setting embedded in the modal',
      go: 'See the proposal',
      text: 'An error and a warning explained a setting the admin had to go elsewhere to change.'},
    {to: '/work/content-design/domain-lookup-tool', tag: 'Troubleshooting',
      title: 'Domain Lookup Tool', img: '/img/content-design/domain-lookup-tool.png',
      imgAlt: 'Domain Lookup Tool showing which policy rule decided a domain',
      go: 'See the tool',
      text: 'The answer to a troubleshooting question lived in an architecture diagram, not in the policy.'},
  ],
  architecture: [
    {to: '/work/docs-engineering/cse-ia-rework-case-study', icon: 'route', tag: 'Navigation',
      title: 'CSE docs IA rework', go: 'See what changed',
      text: 'A sidebar named after product parts, regrouped so readers find a task by its name, in the order they do it.'},
    {to: '/work/docs-engineering/ia-model-case-study', icon: 'grid', tag: 'Estate model',
      title: 'IA for a product estate', go: 'See the model',
      text: 'One view that compares every product’s doc set against the same definition of complete.'},
  ],
  docs: [
    {to: '/work/published-cse-docs#internet-threat-protection-itp-architecture', icon: 'globe', tag: 'Architecture',
      title: 'ITP architecture', go: 'Read about it',
      text: 'Where a DNS block actually happens, traced hop by hop across three components.'},
    {to: '/work/published-cse-docs#forward-cse-events-to-the-elk-stack', icon: 'plug', tag: 'Integration',
      title: 'Forward events to ELK', go: 'Read about it',
      text: 'An end-to-end procedure against a real toolchain, with copyable config.'},
    {to: '/work/published-cse-docs#trust-scoring', icon: 'gauge', tag: 'Concepts',
      title: 'Trust Scoring', go: 'Read about it',
      text: 'Four terms that sound alike, defined once and kept distinct.'},
  ],
  automations: [
    {to: '/work/docs-engineering/pr-evaluator-case-study', icon: 'git', tag: 'CI job',
      title: 'PR-to-docs impact evaluator', go: 'See how it works',
      text: 'Compares recent merges against the docs and lists the pages that look out of date.'},
    {to: '/work/docs-engineering/staleness-auditor-case-study', icon: 'clock', tag: 'Audit',
      title: 'Staleness auditor', go: 'See how it works',
      text: 'Checks the whole site against the current console and returns a ranked backlog.'},
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
