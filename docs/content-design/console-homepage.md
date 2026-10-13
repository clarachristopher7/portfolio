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

![A prototype of the homepage before the redesign. Six counts sit above five charts that split devices, policies, and connectors by type or status.](/img/content-design/console-home-before.png)

<p className="shot-cap">Six counts and five charts, filtered to the last 30 days. Every chart describes what the organization has. None of them says whether the product is working.</p>

The homepage answered questions that admins don't ask when they sign in. It counted devices, users, services, policies, roles, and connectors. Its charts split those counts by operating system or by status.

A count with no context doesn't tell an admin what to do. 1,149 services is neither good nor bad. A trust level chart that's almost all **Deny** could mean an attack, or a trust setting that's too strict. The screen didn't say which.

The charts also hid what little they showed. Legends were cut off mid-word, and one chart had a single bar for a single platform.

## What I tried

I started from the use cases instead of from the data. For each use case, I asked what an admin needs to know to decide whether it's working. I also asked what the admin should do next if it isn't.

Then I chose the metrics that answer those questions. Each use case gets its own card, with a headline number, the gap that needs attention, and a link to the activity behind it. The cards replaced the inventory counts and charts.

![A prototype of the redesigned homepage. An alert, licenses, and tasks are at the top. Below them are AI activity metrics and one card for each use case.](/img/content-design/console-home-after.png)

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
