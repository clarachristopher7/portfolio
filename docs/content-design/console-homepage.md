---
hide_table_of_contents: true
sidebar_position: 2
---

# Admin console homepage

<p className="hub-sub">The first thing admins saw after signing in was a wall of counts and charts. 1,149 services. 397 policies. Is that good? Nobody could say. I chose metrics that answer the question admins actually have.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Admins run Cloud Secure Edge from a web-based admin console. The homepage is the first screen they see after signing in, which makes it the natural place to answer one question. Is this product doing the job we bought it for?</p>
  <p>Customers buy the product for a handful of main reasons, or use cases. I worked on the redesign with the product designer, and my part was choosing what the page measures for each one.</p>
</div>

## The problem

![A prototype of the homepage before the redesign. Callout 1 points to the devices by operating system chart, and 2 to the row of counts.](/img/content-design/console-home-before.webp)

<p className="shot-cap">Six counts and five charts, all about what the organization has. Not one says whether the product is working.</p>

The page answered questions nobody asks when they sign in.

1. **No sense of what to do.** A chart of devices by operating system tells you the mix of devices. Great. Now what? It doesn't say what to act on, or whether things are healthy.
2. **Counts with no context.** The top row counted devices, users, services, policies, roles, and connectors. Is 1,149 services a lot? A little? It's neither good nor bad. It's just a number.

## The approach

I started from the use cases, not the data. For each one, I asked what an admin needs to know to tell whether it's working, and what to do if it isn't. Then I chose the metrics that answer those questions.

Each use case gets a card with a headline number, the gap to fix, and a link to the activity behind it. At the top, a health meter rolls the use cases up into one score, so the admin sees what needs attention before scrolling.

![A prototype of the redesigned homepage. Callouts point to the health score that rolls up every use case, a use case card with its headline number and the reason behind it, and the gap that a card says to fix.](/img/content-design/console-home-after-annotated.webp)

<div className="hl-after">

| | Before | After |
|---|---|---|
| **Top of the page** | Six inventory counts | A health score for the organization, with what needs attention |
| **Main content** | Counts of devices, users, services, policies, roles, and connectors | A card for each use case, with a headline number and the gap to fix |
| **Context** | No comparisons or status | Comparisons such as "vs. last week", and a status for each use case |
| **Next step** | None | A link to the activity behind each number |

</div>

## The constraint

<div className="ts-steps">

1. The homepage had to work for every customer, whatever they had bought.
2. Each license turns on different features, so each customer's console collects different data. A metric couldn't depend on a feature that the customer doesn't have.

</div>

## The outcome

It's still a prototype. The product team is using the use case metrics to plan the next version of the homepage, starting with the health meter.
