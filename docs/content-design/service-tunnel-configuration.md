---
sidebar_position: 2
---

# Service Tunnel configuration

> **Why this one:** This sample is about where configuration lives rather than how it is worded. Network admins coming from firewall consoles expect a rule and the scope it applies to be set up together, and here they sat on separate screens.

**Surface:** Service Tunnel configuration, Cloud Secure Edge admin console.

**Audience:** Network admins whose reference point is a firewall console.

## The problem

Configuring a tunnel also meant configuring the access policy that governed it [where: a separate section, a later step, a different object]. The system stored them as two things, so the console presented them as two things.

A tunnel without an access policy does not do anything. An admin could fill in everything the screen asked for and still have nothing usable.

[What that cost: support themes, misconfigurations, time lost during onboarding.]

## The constraint

[Whether the policy object belonged to another surface or team, and how much that limited what could be embedded. Whether reuse of one policy across tunnels had to be preserved.]

## What I tried

[Whether you proposed a cross-link to the policy screen, or clearer copy explaining the second step, and why those were not enough.]

## What I shipped

In a firewall console, a rule and the scope it applies to are set up in the same place. Here the configuration followed how the system stores the two objects, which is a different shape from how an admin works through the task.

Putting the access policy inside the Service Tunnel configuration means the screen matches the thing being built, and finishing the form produces something that works.

[Before and after screenshots, rebuilt unbranded as in the Device Geolocation sample, plus any strings you wrote to introduce the embedded policy.]

[How it was scoped: the whole policy or only the relevant fields, and what an admin sees who already has one configured.]

## What changed

[Time to a working tunnel, a drop in a particular support theme, or whether the same approach was used for other configuration objects.]
