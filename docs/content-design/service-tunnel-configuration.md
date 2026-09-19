---
sidebar_position: 2
---

# Service Tunnel configuration

> **Why this one:** Most of the people configuring a Service Tunnel had years of experience with legacy network appliance consoles. The work was finding a shape that met that expectation while keeping what the tunnel actually does differently.

**Surface:** Service Tunnel configuration, Cloud Secure Edge admin console.

**Audience:** Network admins whose reference point is a legacy network appliance console.

## The problem

A Service Tunnel is a zero trust object. Most of the admins setting one up came from legacy appliance consoles, where a rule and the scope it applies to are configured in one place, in one pass. The question was how to match that intuition while keeping the parts of the tunnel experience that work differently.

The console pulled in the other direction. Configuring a tunnel also meant configuring the access policy that governed it [where: a separate section, a later step, a different object]. The system stored them as two objects, so the screen presented them as two jobs. A tunnel without an access policy does not do anything, so an admin could fill in everything the form asked for and still have nothing usable.

[What that cost: support themes, misconfigurations, time lost during onboarding.]

## The constraint

[Whether the policy object belonged to another surface or team, and how much that limited what could be embedded. Whether one policy had to stay reusable across tunnels. How much of the zero trust model had to stay visible rather than be smoothed into something that only looks like an appliance.]

## What I tried

[Whether you proposed a cross-link to the policy screen, or clearer copy explaining the second step, and what made those insufficient.]

## What I shipped

Embedding the user access policy configuration inside the Service Tunnel configuration gives admins the single-pass setup they expect from an appliance console. The tunnel is still a zero trust object and still behaves like one. What changed is that the policy governing it is set up in the same place, so finishing the form produces something that works.

[Before and after screenshots, rebuilt unbranded as in the Device Geolocation sample, plus any strings you wrote to introduce the embedded policy.]

[How it was scoped: the whole policy or only the relevant fields, and what an admin sees who already has one configured.]

## What changed

[Time to a working tunnel, a drop in a particular support theme, or whether the same approach was used for other configuration objects.]
