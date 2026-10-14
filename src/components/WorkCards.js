import React from 'react';
import {HubGroup, HubCard} from './Hub';

// One source for the work cards, so the homepage and the section
// overview pages always describe each piece the same way.
const SETS = {
  contentDesign: [
    {to: "/content-design/device-geolocation-trust-factor", tag: "Interface copy",
      title: "Geolocation trust factor", img: "/img/content-design/device-geolocation-after.webp",
      imgAlt: "The geolocation trust factor settings, with a sentence that states the rule",
      go: "See the before and after",
      text: "A settings screen that never said whether the chosen countries were blocked or allowed. I rewrote it to state the rule."},
    {to: "/content-design/console-homepage", tag: "Dashboard",
      title: "Admin console homepage", img: "/img/content-design/console-home-after.webp",
      imgAlt: "A prototype of the redesigned console homepage, with a card of metrics for each use case",
      go: "See the before and after",
      text: "A homepage of counts that admins couldn't act on. I chose metrics for each reason that customers buy the product."},
    {to: "/content-design/ai-prompt-visibility", tag: "Setup flow",
      title: "AI prompt visibility", img: "/img/content-design/ai-prompt-itp-policy.webp",
      imgAlt: "A prototype of an Internet Threat Protection policy with a TLS decryption switch",
      go: "See the prototypes",
      text: "A logging switch that looked on but logged nothing until decryption was set up elsewhere. I prototyped two fixes."},
    {to: "/content-design/domain-lookup-tool", tag: "Troubleshooting",
      title: "Domain Lookup Tool", img: "/img/content-design/domain-lookup-tool.png",
      imgAlt: "The Domain Lookup Tool panel inside an Internet Threat Protection policy",
      go: "See the tool",
      text: "Admins couldn't tell which rule blocked a website. I suggested a lookup tool, inside the policy, that shows them."},
  ],
  architecture: [
    {to: "/docs-engineering/cse-ia-rework-case-study", img: "/img/previews/cse-ia.png",
      imgAlt: "A docs homepage organized by goal, with a task-based sidebar", tag: "Navigation",
      title: "Cloud Secure Edge information architecture", go: "See what changed",
      text: "Docs organized by product component instead of by task. I reorganized the navigation around admin tasks, and no link broke."},
    {to: "/docs-engineering/ia-model-case-study", img: "/img/previews/ia-model.png",
      imgAlt: "A portfolio map table showing each product's docs sections as Have, Partial, Missing, or Not applicable", tag: "Portfolio model",
      title: "Information architecture across a product portfolio", go: "See the model",
      text: "Every product's docs grew separately. I built a model that measures all of them against one definition of complete."},
    {to: "/docs-engineering/docs-modernization-case-study", img: "/img/previews/modernization.png",
      imgAlt: "One sonicwall.com address that routes /docs to a docs pipeline and everything else to the main website", tag: "Platform proposal",
      title: "Documentation platform modernization", go: "See the proposal",
      text: "Docs split across two sites, with navigation owned by another team. I proposed one site that the docs team controls."},
  ],
  docs: [
    {to: "https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/", img: "/img/previews/itp.png",
      imgAlt: "A docs page with a diagram of how a website request is checked", tag: "Architecture",
      title: "Internet Threat Protection architecture", go: "Open the live page",
      text: "Where Internet Threat Protection checks a website request, where it blocks it, and which component does each step."},
    {to: "https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/", img: "/img/previews/elastic.png",
      imgAlt: "A docs page with a Logstash configuration example", tag: "Integration",
      title: "Forward security events to the Elastic Stack", go: "Open the live page",
      text: "How to send Cloud Secure Edge security events to the Elastic Stack, with a configuration that's ready to copy."},
    {to: "https://cse-docs.sonicwall.com/docs/trust-scoring/", img: "/img/previews/trust.png",
      imgAlt: "A docs page that defines four trust terms, with a trust effect meter", tag: "Concepts",
      title: "Trust scoring", go: "Open the live page",
      text: "Defines four trust terms that sound alike, and shows how they combine into one decision about a device."},
  ],
  automations: [
    {to: "/automations", img: "/img/previews/evaluator.png",
      imgAlt: "A dated report that lists code changes and the docs pages they likely affect", tag: "Automation",
      title: "Keeping the docs accurate", go: "See how they work",
      text: "Docs go wrong quietly when the product changes. I built two tools that catch it, and a writer decides what to fix."},
  ],
};

// The homepage's "Start here" row: one strong piece from each kind of work.
const ALL = Object.values(SETS).flat();
const FEATURED = [
  "/content-design/device-geolocation-trust-factor",
  "/content-design/console-homepage",
  "/docs-engineering/cse-ia-rework-case-study",
];
SETS.featured = FEATURED.map((to) => ALL.find((c) => c.to === to));

// exclude: set it to true to leave out the featured cards, so the
// homepage doesn't show the same piece twice.
export default function WorkCards({set, label, srLabel = 'Projects', columns, exclude}) {
  const cards = (SETS[set] || []).filter((c) => !(exclude && FEATURED.includes(c.to)));
  return (
    <HubGroup label={label} srLabel={srLabel} columns={columns || (cards.length === 1 ? 1 : cards.length % 3 === 0 ? 3 : 2)}>
      {cards.map(({text, ...c}) => (
        <HubCard key={c.to} {...c}>{text}</HubCard>
      ))}
    </HubGroup>
  );
}
