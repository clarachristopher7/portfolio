import React from 'react';
import {HubGroup, HubCard} from './Hub';

// One source for the work cards, so the homepage and the section
// overview pages always describe each piece the same way.
const SETS = {
  contentDesign: [
    {to: "/content-design/device-geolocation-trust-factor", tag: "Interface copy",
      title: "Geolocation trust factor", img: "/img/content-design/device-geolocation-after.png",
      imgAlt: "The geolocation trust factor settings, with a sentence that states the rule",
      go: "See the before and after",
      text: "Admins chose countries on this screen, but the screen did not say whether it would block or allow them. I rewrote the copy to state the rule and changed the order of the screen to match how admins decide."},
    {to: "/content-design/ai-prompt-visibility", tag: "Setup flow",
      title: "AI prompt visibility", img: "/img/content-design/ai-prompt-after.png",
      imgAlt: "The proposed AI prompt logging screen, with the decryption setting above the logging switch",
      go: "See the proposal",
      text: "The logging switch seemed to work, but nothing was captured until an admin changed a setting on another screen. I proposed moving that setting into the same flow."},
    {to: "/content-design/domain-lookup-tool", tag: "Troubleshooting",
      title: "Domain Lookup Tool", img: "/img/content-design/domain-lookup-tool.png",
      imgAlt: "The Domain Lookup Tool panel inside an Internet Threat Protection policy",
      go: "See the tool",
      text: "When a website was blocked, admins could not tell which rule blocked it. I suggested a lookup tool inside the policy that shows them."},
  ],
  architecture: [
    {to: "/docs-engineering/cse-ia-rework-case-study", icon: "route", tag: "Navigation",
      title: "Cloud Secure Edge information architecture", go: "See what changed",
      text: "The docs were organized by product component. I reorganized them around the tasks that admins come to do, and every existing link still works."},
    {to: "/docs-engineering/ia-model-case-study", icon: "grid", tag: "Portfolio model",
      title: "Information architecture across a product portfolio", go: "See the model",
      text: "Each product's docs grew separately. I built a model that measures all of them against one definition of complete."},
  ],
  docs: [
    {to: "https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/", icon: "globe", tag: "Architecture",
      title: "Internet Threat Protection architecture", go: "Open the live page",
      text: "Explains where Internet Threat Protection checks a website request, where it blocks the request, and which component does each step."},
    {to: "https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/", icon: "plug", tag: "Integration",
      title: "Forward security events to the Elastic Stack", go: "Open the live page",
      text: "Explains how to send Cloud Secure Edge security events to Elasticsearch, Logstash, and Kibana. The configuration is ready to copy."},
    {to: "https://cse-docs.sonicwall.com/docs/trust-scoring/", icon: "gauge", tag: "Concepts",
      title: "Trust scoring", go: "Open the live page",
      text: "Defines four terms that sound alike: trust factor, trust effect, trust profile, and trust level. Shows how they combine into one decision about a device."},
  ],
  automations: [
    {to: "/docs-engineering/pr-evaluator-case-study", icon: "git", tag: "Scheduled job",
      title: "Documentation impact evaluator", go: "See how it works",
      text: "A scheduled job that compares recent code changes with the docs. It reports the pages that the changes probably made wrong."},
    {to: "/docs-engineering/staleness-auditor-case-study", icon: "clock", tag: "Audit",
      title: "Documentation staleness auditor", go: "See how it works",
      text: "Compares the docs with each new version of the admin console. It produces a backlog of fixes, ranked by impact."},
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
