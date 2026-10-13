---
hide_table_of_contents: true
sidebar_position: 4
---

# Admin console homepage

<p className="hub-sub">The admin console's homepage filled the screen with counts and charts, but none of them told admins whether Cloud Secure Edge was doing its job. The product designer and I redesigned it around the reasons that customers buy the product.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a SonicWall service that decides whether an employee's device can connect to company apps and websites. Admins set it up and run it from a web-based admin console.</p>
  <p>The homepage is the first screen that an admin sees after they sign in. It's the natural place to answer one question. Is the product doing the job that we bought it for?</p>
  <p>Customers buy Cloud Secure Edge for a few primary use cases. Examples are replacing a VPN, filtering web traffic, and controlling the AI apps that employees use. I worked on the redesign with the product designer. My part was to choose the metrics that show how each use case is going.</p>
</div>

## Before

![A prototype of the homepage before the redesign. Six counts sit above five charts that split devices, policies, and connectors by type or status.](/img/content-design/console-home-before.png)

<p className="shot-cap">Six counts and five charts, filtered to the last 30 days. Every chart describes what the organization has. None of them says whether the product is working.</p>

## The problem

The homepage answered questions that admins don't ask when they sign in. It counted devices, users, services, policies, roles, and connectors. Its charts split those counts by operating system or by status.

A count with no context doesn't tell an admin what to do. 1,149 services is neither good nor bad. A trust level chart that's almost all **Deny** could mean an attack, or a trust setting that's too strict. The screen didn't say which.

The charts also hid what little they showed. Legends were cut off mid-word, and one chart had a single bar for a single platform.

## The constraint

The homepage had to work for every customer, whatever they had bought. Each license turns on different features, so each customer's console collects different data. A metric couldn't depend on a feature that the customer doesn't have.

## What I tried

I started from the use cases instead of from the data. For each use case, I asked what an admin needs to know to decide whether it's working. I also asked what the admin should do next if it isn't.

Then I chose the metrics that answer those questions. Each metric has a comparison, such as "vs. yesterday", and a link to the activity behind it. The inventory counts and charts stayed, under the heading **Environment Overview**, below the use case metrics.

## After

![A prototype of the redesigned homepage. An alert, licenses, tasks, and release notes are at the top. Below them, AI activity metrics come before the inventory counts and charts.](/img/content-design/console-home-after.png)

| What the admin needs to know | What the homepage shows |
|---|---|
| Is there something to act on now? | An alert for AI apps that nobody has reviewed yet, with a button to review them |
| Am I getting what I pay for? | Each license, its renewal date, and how many of its features are set up |
| What should I set up next? | Tasks, each with a one-line reason and a **Get Started** link |
| Is AI use under control? | AI apps discovered, allowed, and blocked, each compared with the day or week before |
| What are employees sending to AI apps? | Prompts, prompts sent from personal accounts, and prompts with attachments |

Metrics that need a higher license still appear, with the note "Can see more with a license upgrade". The admin sees what they could measure, instead of an empty space.

## The outcome

The redesign is a prototype. The team hasn't built it yet. [Add: what happened next, such as feedback from customers or the product team.]
