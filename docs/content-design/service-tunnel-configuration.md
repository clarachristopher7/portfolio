---
sidebar_position: 2
---

# Service Tunnel Configuration

> **Why this one:** The fix wasn't a string — it was where the strings lived. Network admins arriving from firewall consoles already had a working mental model, and the configuration was split in a way that didn't match it. Content design work often looks like this: the words are fine, but they're in two places that should be one.

**Surface:** Service Tunnel configuration in the Cloud Secure Edge admin console.

**Audience:** Network admins, most of whom came to the product with firewall configuration interfaces as their reference point. They arrive with strong expectations about how access rules are structured and where they live.

**My role:** Recommended embedding user access policy configuration inside the Service Tunnel configuration, rather than leaving it as a separate step.

## The problem

Admins configuring a Service Tunnel had to configure the access policy governing it [describe where — a separate section of the console, a later step, a different object entirely]. The two were modeled as separate things by the system, so they were presented as separate things to the admin.

But a tunnel without an access policy isn't a meaningful unit of configuration. It's a half-finished object. Splitting them meant an admin could complete what looked like a whole task and have configured nothing usable.

[What this cost in practice — support themes, misconfigurations, onboarding friction, or what you heard from the field.]

## The constraint

[What you were working inside. The policy object likely belonged to another surface or another team — did that limit how much you could embed? Was there a data-model reason the two were separate? Was reuse of the policy across tunnels a requirement you had to preserve?]

## What I tried

[What you proposed before this landed, and what got rejected. A cross-link from the tunnel screen to the policy screen? Better instructional copy explaining the second step? Those are the obvious cheaper fixes — if you tried and abandoned them, say why they weren't enough.]

## What I shipped

The audience's existing mental model was the lever. In a firewall interface, a rule and the scope it applies to are configured in the same place; you don't define an interface here and the policy that governs it over there. Admins weren't confused because the product was complicated — they were confused because it was organized along the system's seams rather than along the task's.

Embedding the access policy configuration within the Service Tunnel configuration meant:

- The object the admin is building matches the object the screen presents.
- Completing the form produces something that actually works, rather than something that needs a second trip elsewhere.
- The structure rewards the knowledge admins already have instead of asking them to set it aside.

[Add the before/after screenshots, cropped to the relevant panels, and any strings you wrote to introduce the embedded policy — a section heading, help text explaining the relationship. Rebuild them unbranded, as in the Device Geolocation sample.]

[Note how you scoped it: does the embedded panel expose the whole policy or only the relevant fields, and what does an admin see who already has a policy configured?]

## What changed

[The result — time to configure a working tunnel, a drop in a specific support theme, or whether the embedded pattern carried to other configuration objects in the console.]
