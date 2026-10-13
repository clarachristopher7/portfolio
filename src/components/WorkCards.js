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
      title: "AI prompt visibility", img: "/img/content-design/ai-prompt-itp-policy.png",
      imgAlt: "A prototype of an Internet Threat Protection policy with a TLS decryption switch",
      go: "See the prototypes",
      text: "The logging switch seemed to work, but nothing was captured until an admin turned on decryption in another part of the admin console. I prototyped two ways to connect the two settings."},
    {to: "/content-design/domain-lookup-tool", tag: "Troubleshooting",
      title: "Domain Lookup Tool", img: "/img/content-design/domain-lookup-tool.png",
      imgAlt: "The Domain Lookup Tool panel inside an Internet Threat Protection policy",
      go: "See the tool",
      text: "When a website was blocked, admins could not tell which rule blocked it. I suggested a lookup tool inside the policy that shows them."},
    {to: "/content-design/console-homepage", tag: "Dashboard",
      title: "Admin console homepage", img: "/img/content-design/console-home-after.png",
      imgAlt: "A prototype of the redesigned console homepage, with a card of metrics for each use case",
      go: "See the before and after",
      text: "The homepage showed counts and charts that didn't tell admins anything they could act on. I chose metrics for each reason that customers buy the product."},
  ],
  architecture: [
    {to: "/docs-engineering/cse-ia-rework-case-study", img: "/img/previews/cse-ia.png",
      imgAlt: "A docs homepage organized by goal, with a task-based sidebar", tag: "Navigation",
      title: "Cloud Secure Edge information architecture", go: "See what changed",
      text: "The docs were organized by product component. I reorganized them around the tasks that admins come to do, and every existing link still works."},
    {to: "/docs-engineering/ia-model-case-study", img: "/img/previews/ia-model.png",
      imgAlt: "A portfolio map table showing each product's docs sections as Have, Partial, Missing, or Not applicable", tag: "Portfolio model",
      title: "Information architecture across a product portfolio", go: "See the model",
      text: "Each product's docs grew separately. I built a model that measures all of them against one definition of complete."},
    {to: "/docs-engineering/docs-modernization-case-study", img: "/img/previews/modernization.png",
      imgAlt: "One sonicwall.com address that routes /docs to a docs pipeline and everything else to the main website", tag: "Platform proposal",
      title: "Documentation platform modernization", go: "See the proposal",
      text: "Docs were split across two sites, and another team controlled the navigation. I proposed one docs site that the docs team can change directly."},
  ],
  docs: [
    {to: "https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/", img: "/img/previews/itp.png",
      imgAlt: "A docs page with a diagram of how a website request is checked", tag: "Architecture",
      title: "Internet Threat Protection architecture", go: "Open the live page",
      text: "Explains where Internet Threat Protection checks a website request, where it blocks the request, and which component does each step."},
    {to: "https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/", img: "/img/previews/elastic.png",
      imgAlt: "A docs page with a Logstash configuration example", tag: "Integration",
      title: "Forward security events to the Elastic Stack", go: "Open the live page",
      text: "Explains how to send Cloud Secure Edge security events to Elasticsearch, Logstash, and Kibana. The configuration is ready to copy."},
    {to: "https://cse-docs.sonicwall.com/docs/trust-scoring/", img: "/img/previews/trust.png",
      imgAlt: "A docs page that defines four trust terms, with a trust effect meter", tag: "Concepts",
      title: "Trust scoring", go: "Open the live page",
      text: "Defines four terms that sound alike: trust factor, trust effect, trust profile, and trust level. Shows how they combine into one decision about a device."},
  ],
  automations: [
    {to: "/docs-engineering/pr-evaluator-case-study", img: "/img/previews/evaluator.png",
      imgAlt: "A dated report that lists code changes and the docs pages they likely affect", tag: "Scheduled job",
      title: "Documentation impact evaluator", go: "See how it works",
      text: "A scheduled job that compares recent code changes with the docs. It reports the pages that the changes probably made wrong."},
    {to: "/docs-engineering/staleness-auditor-case-study", img: "/img/previews/auditor.png",
      imgAlt: "A backlog of docs pages that no longer match the console, ranked by impact", tag: "Audit",
      title: "Documentation staleness auditor", go: "See how it works",
      text: "Compares the docs with each new version of the admin console. It produces a backlog of fixes, ranked by impact."},
  ],
};

export default function WorkCards({set, label, columns}) {
  const cards = SETS[set] || [];
  return (
    <HubGroup label={label} columns={columns || (cards.length % 3 === 0 ? 3 : 2)}>
      {cards.map(({text, ...c}) => (
        <HubCard key={c.to} {...c}>{text}</HubCard>
      ))}
    </HubGroup>
  );
}
