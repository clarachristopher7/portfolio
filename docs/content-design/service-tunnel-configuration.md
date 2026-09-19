---
sidebar_position: 2
---

# Service Tunnel Configuration

> **Why this one:** The fix here wasn't a string — it was where the strings lived. Network admins arriving from firewall consoles already had a working mental model, and the configuration was split in a way that didn't match it. Content design work often looks like this: the words are fine, but they're in two places that should be one.

## Context

**Product:** SonicWall Cloud Secure Edge, a zero trust network access platform.

**Surface:** Service Tunnel configuration in the admin console.

**Audience:** Network admins, most of whom came to the product with firewall configuration interfaces as their reference point. They arrive with strong expectations about how access rules are structured and where they live.

**My role:** Recommended embedding user access policy configuration inside the Service Tunnel configuration, rather than leaving it as a separate step.

## The problem

Admins configuring a Service Tunnel had to configure the access policy governing it [describe where — a separate section of the console, a later step in the flow, a different object entirely]. The two were modeled as separate things by the system, so they were presented as separate things to the admin.

But a tunnel without an access policy isn't a meaningful unit of configuration. It's a half-finished object. Splitting them meant an admin could complete what looked like a whole task and have configured nothing usable.

[Add what this cost in practice — support themes, misconfigurations, onboarding friction, or what you heard from the field.]

## The argument

The audience's existing mental model was the lever. In a firewall interface, a rule and the scope it applies to are configured in the same place; you don't define an interface here and the policy that governs it over there. Admins weren't confused because the product was complicated — they were confused because it was organized along the system's seams rather than along the task's.

Embedding the access policy configuration within the Service Tunnel configuration meant:

- The object the admin is building matches the object the screen presents.
- Completing the form produces something that actually works, rather than something that needs a second trip elsewhere.
- The structure rewards the knowledge admins already have instead of asking them to set it aside.

[Add any pushback you worked through — engineering concerns about the data model, scope, or reuse of the policy object — and how it was resolved. This is usually the most interesting part of an IA change, and it's the part that shows you can carry an argument rather than just have an opinion.]

## Before / after

[Add screenshots of the old and new configuration surfaces, cropped to the relevant panels. Same treatment as the Device Geolocation sample.]

[If you wrote or revised strings as part of this — section headings, helper text introducing the embedded policy, anything that had to explain the new relationship — list them here as a before/after table.]

## Outcome

[Add a concrete result — time to configure a working tunnel, reduction in a specific support theme, whether the embedded pattern carried to other configuration objects in the console.]
