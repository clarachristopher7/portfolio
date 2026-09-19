---
sidebar_position: 3
---

# AI Prompt Visibility — Replacing an Error With a Control

> **Why this one:** An error message is sometimes the correct answer to a question the product shouldn't have asked. This sample is about deleting two messages and shipping a configuration panel in their place.

## Context

**Product:** SonicWall Cloud Secure Edge.

**Surface:** The AI visibility feature in the admin console, which lets admins view user prompt logs from AI applications.

**Audience:** Security and IT admins turning on visibility into how their organization is using AI tools — typically to answer a question someone above them has already asked.

**My role:** Recommended replacing the post-toggle error and warning messages with an embedded Internet Threat Protection policy configuration, so the feature works once the toggle is on.

## The problem

Turning on prompt logging required a second, unrelated-looking step: a setting inside an Internet Threat Protection policy, configured in a different part of the console. Without it, logging ran in the background but the logs never populated the screen.

The original design handled this by firing an error and a warning as soon as the admin flipped the toggle.

[Add the two strings verbatim here — the error and the warning — as they appeared. They're the "before," and the specifics matter.]

Three things were wrong with that, in increasing order of severity:

**The admin did the right thing and got an error for it.** They came to turn on a feature, they turned on the feature, and the product responded with a failure state. Nothing had failed. The error wasn't reporting a mistake — it was reporting that the product was incomplete.

**Two messages were doing the work of one control.** An error plus a warning is a lot of surface area to explain a dependency. That volume of explanation is usually a signal that the thing being explained shouldn't exist.

**The failure was invisible if you dismissed them.** This is the real cost. The toggle stayed on. Logging genuinely ran. The admin's belief — *I turned it on, so it's on* — was correct about the toggle and wrong about the outcome, and the empty screen they'd come back to later looked exactly like an organization that wasn't using AI tools much. A security feature that silently reports nothing is worse than one that's visibly off.

## The argument

The messages were accurate. That was the problem — being accurate was all they could do. Both of them pointed at a policy screen elsewhere in the console and asked the admin to go finish the job there, which meant leaving the task they were in, finding an object they may not have known was related, and knowing which setting inside it mattered.

Embedding the Internet Threat Protection policy configuration directly in the AI visibility surface removed the trip. The dependency still exists in the system, but it stops being the admin's problem to route around: the toggle and the setting that makes the toggle mean something live in the same place, and turning the feature on turns the feature on.

[Add how you scoped this — whether the embedded panel exposes the full policy or only the relevant setting, and how you handled an admin who already has that policy configured. The "already configured" case is worth documenting; it's the one that usually gets left out.]

[Add any pushback — the policy object belonging to a different team or surface, concerns about duplicating configuration in two places — and how it was resolved.]

## Before / after

[Add screenshots: the toggle with the error and warning, and the embedded configuration that replaced them. Crop to the relevant panel, as in the Device Geolocation sample.]

[If you wrote the strings for the embedded panel — its heading, any help text explaining what the setting does and why it's here — list them here.]

## Outcome

[Add a concrete result — admins reaching populated logs without a support ticket, reduction in "logging is on but empty" reports, or whether the embed-the-dependency pattern carried to other features with cross-console prerequisites.]
