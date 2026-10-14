---
hide_table_of_contents: true
sidebar_position: 4
---

# Admin console homepage

<p className="hub-sub">The admin console's homepage filled the screen with counts and charts, but none of them told admins whether Cloud Secure Edge was doing its job. The product designer and I redesigned it around the reasons that customers buy the product.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps and websites. Admins set it up and run it from a web-based admin console.</p>
  <p>The homepage is the first screen that an admin sees after they sign in. It's the natural place to answer one question. Is the product doing the job that we bought it for?</p>
  <p>Customers buy Cloud Secure Edge for a few primary use cases. They include remote access without a VPN, blocking malicious content, zero trust access to private apps, checking device security posture, and protecting SaaS apps. I worked on the redesign with the product designer. My part was to choose the metrics that show how each use case is going.</p>
</div>

## The problem

![A prototype of the homepage before the redesign. Callout 1 points to the row of counts, 2 to the devices by operating system chart, 3 to a hollow ring chart, and 4 to a legend cut off mid-word.](/img/content-design/console-home-before.png)

<p className="shot-cap">Six counts and five charts, filtered to the last 30 days. Every chart describes what the organization has. None of them says whether the product is working.</p>

The homepage answered questions that admins don't ask when they sign in.

1. **Counts with no context.** The top row counted devices, users, services, policies, roles, and connectors. 1,149 services is neither good nor bad.
2. **No sense of what to do.** A chart of devices by operating system shows the mix of devices. It doesn't tell an admin what to act on, or whether the organization is in good health.
3. **Hard-to-read charts.** Hollow ring charts make it hard to compare slices, especially thin ones.
4. **Labels cut off.** Legends were cut off mid-word, so admins couldn't always tell what a color meant.

## The approach

I started from the use cases instead of from the data. For each use case, I asked what an admin needs to know to decide whether it's working. I also asked what the admin should do next if it isn't.

Then I chose the metrics that answer those questions. Each use case gets its own card, with a headline number, the gap that needs attention, and a link to the activity behind it. The cards replaced the inventory counts and charts.

At the top of the page, a health meter rolls the use cases up into one score. It lists each use case with its status, so the admin sees what needs attention before scrolling.

![A prototype of the redesigned homepage. Callouts point to the health meter, the license setup progress, a locked metric that shows what an upgrade adds, and a use case card that shows what needs attention.](/img/content-design/console-home-after-annotated.png)

<div className="hl-after">

| | Before | After |
|---|---|---|
| **Top of the page** | Six inventory counts | A health score for the organization, with what needs attention |
| **Main content** | Counts of devices, users, services, policies, roles, and connectors | A card for each use case, with a headline number and the gap to fix |
| **Context** | No comparisons or status | Comparisons such as "vs. yesterday", and a status for each use case |
| **Next step** | None | A link to the activity behind each number, and a task list |
| **Charts** | Hollow ring charts with legends cut off | Plain numbers and bars with full labels |

</div>

Each use case card answers one question:

| Use case | What the homepage shows |
|---|---|
| **Remote access** | How many users connected through a Service Tunnel today, and how many connections failed |
| **Blocking malicious content** | Threats blocked this week, and the devices that have no threat protection |
| **Zero trust access** | Access requests denied by policy, and the services that have no access policy |
| **Device security posture** | Devices at each trust level, how many are below the level they need, and the most common reason |
| **Protecting SaaS apps** | Sign-ins blocked from untrusted devices, and the apps that still accept any device |
| **AI apps** | AI apps discovered, allowed, and blocked, plus the prompts that employees send |

Above the cards, an alert flags AI apps that nobody has reviewed yet. Each license shows how many of its features are set up, and the task list suggests what to set up next.

Metrics that need a higher license still appear, with the note "Can see more with a license upgrade". The admin sees what they could measure, instead of an empty space.

## The constraint

The homepage had to work for every customer, whatever they had bought. Each license turns on different features, so each customer's console collects different data. A metric couldn't depend on a feature that the customer doesn't have.

## The outcome

The redesign is a prototype. The team hasn't built it yet. [Add: what happened next, such as feedback from customers or the product team.]
