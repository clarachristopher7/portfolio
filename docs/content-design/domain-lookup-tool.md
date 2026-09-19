---
hide_table_of_contents: true
sidebar_position: 3
---

# Domain Lookup Tool

> **Why this one:** The answer an admin needed already existed in our documentation, drawn as an architecture diagram. It was the wrong shape for someone in the middle of an incident. This sample is about moving the answer into the product rather than writing it up again.

**Surface:** Internet Threat Protection policy, Cloud Secure Edge admin console.

**Audience:** Network admins troubleshooting a policy that is blocking or allowing something they did not expect.

## The problem

An Internet Threat Protection policy decides what happens to a DNS request by passing it through several stages: threat protections, then category, application and domain blocking, then exception rules. When a request came back blocked or allowed unexpectedly, the admin could see the outcome but not which stage produced it.

What we had for this was documentation. This is the diagram that explains how a DNS request is resolved under an Internet Threat Protection policy:

![Documentation diagram of DNS resolution under an Internet Threat Protection policy: a request from the DNS proxy is sorted into local, internet, public or private domain, checked against whether the Service Tunnel is on and whether the domain is included or excluded on the tunnel spec, and routed to the default DNS resolver, the Service Tunnel or the SWG agent.](/img/content-design/itp-dns-resolution-diagram.png)

Four branch points, three possible destinations, and two of the branches depend on settings in a different part of the console. The diagram is accurate, and it answers the question an admin has before they deploy, which is how the system works.

An admin who is mid-incident has a different question: which part of *my* policy handled *this* domain, and what did it decide. No diagram can answer that, because the answer depends on their configuration and the domain in front of them. Tracing their own case through this by hand means knowing their tunnel spec, their inclusion and exclusion lists, and their policy rules, and holding all of it against one domain while a user waits.

[What that cost: ticket volume on unexpected blocks, time to resolve, what admins were doing to work it out instead.]

## The constraint

The scope note carries most of the weight. The tool accounts for threat protections, category, application and domain blocking, and exception rules, and it does not account for Geo Blocking or Risk-based URL Blocking. An admin who assumed it covered everything would read a clean result as proof that nothing in the policy was responsible, and go looking in the wrong place. Stating the limit in the panel keeps that correction next to the result rather than in a document nobody opens mid-incident.

## What I tried

[Whether a better diagram, a troubleshooting page, or a decision table was attempted first, and what made an in-product tool the answer instead.]

## What I shipped

A Domain Lookup Tool inside the Internet Threat Protection policy. The admin enters a domain and gets the verdict that their policy produces for it, along with the categorization behind that verdict, without leaving the policy they are troubleshooting.

![The Lookup Domain panel: a scope note, a domain field with its explanation, and a submit action.](/img/content-design/domain-lookup-tool.png)

[Add the result state. The verdict is where this sample makes its case, and the empty form does not show it.]

## What changed

[Whether admins resolved unexpected blocks without raising a ticket, and whether the architecture diagrams stayed as reference or were retired.]
