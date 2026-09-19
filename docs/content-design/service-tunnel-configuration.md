---
sidebar_position: 2
---

# Service Tunnel configuration

> **Why this one:** The fix wasn't a string; it was where the strings lived. Network admins arriving from firewall consoles already had a working mental model, and the configuration was split in a way that didn't match it. Content design work often looks like this: the words are fine, but they're in two places that should be one.

**Surface:** Service Tunnel configuration, Cloud Secure Edge admin console.

**Audience:** Network admins whose reference point is a firewall console.

## The problem

Configuring a tunnel meant configuring its access policy [where: a separate section, a later step, a different object]. The system modeled them separately, so the screen presented them separately.

A tunnel without an access policy isn't a unit of configuration. It's a half-finished object. An admin could complete what looked like a whole task and have configured nothing usable.

[What that cost: support themes, misconfigurations, onboarding friction.]

## The constraint

[The policy object likely belonged to another surface or team. Did that limit how much could be embedded? Was reuse across tunnels a requirement?]

## What I tried

[A cross-link to the policy screen? Better instructional copy explaining the second step? If those were tried and dropped, why weren't they enough?]

## What I shipped

The audience's mental model was the lever. In a firewall interface, a rule and the scope it applies to are configured together. Admins weren't confused by complexity; they were confused because the product was organized along the system's seams rather than the task's.

Embedding the policy inside the tunnel configuration meant the object on screen matches the object being built, and finishing the form produces something that works.

[Before/after screenshots, rebuilt unbranded as in the Device Geolocation sample, plus any strings introducing the embedded policy.]

[How it was scoped: the whole policy or only the relevant fields, and what an admin sees who already has one configured.]

## What changed

[Time to a working tunnel, a drop in a support theme, or whether the pattern carried to other configuration objects.]
