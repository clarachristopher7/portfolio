---
sidebar_position: 3
---

# AI Prompt Visibility

> **Why this one:** An error message is sometimes the correct answer to a question the product shouldn't have asked. This sample is about deleting two messages and shipping a configuration panel in their place.

**Surface:** The AI visibility feature in the Cloud Secure Edge admin console, which lets admins view user prompt logs from AI applications.

**Audience:** Security and IT admins turning on visibility into how their organization is using AI tools — typically to answer a question someone above them has already asked.

**My role:** Recommended replacing the post-toggle error and warning messages with an embedded Internet Threat Protection policy configuration, so the feature works once the toggle is on.

## The problem

Turning on prompt logging required a second, unrelated-looking step: a setting inside an Internet Threat Protection policy, configured in a different part of the console. Without it, logging ran in the background but the logs never populated the screen.

The original design handled this by firing an error and a warning as soon as the admin flipped the toggle.

[Add the two strings verbatim — the error and the warning, as they appeared. They're the "before," and the exact wording is the evidence.]

Three faults, in increasing order of severity:

**The admin did the right thing and got an error for it.** They came to turn on a feature, they turned it on, and the product responded with a failure state. Nothing had failed. The error wasn't reporting a mistake — it was reporting that the product was incomplete.

**Two messages were doing the work of one control.** An error plus a warning is a lot of surface area to explain a dependency. That volume of explanation is usually a signal that the thing being explained shouldn't exist.

**The failure was invisible if you dismissed them.** The toggle stayed on. Logging genuinely ran. The admin's belief — *I turned it on, so it's on* — was correct about the toggle and wrong about the outcome, and the empty screen they'd return to later looked exactly like an organization that wasn't using AI tools much. A security feature that silently reports nothing is worse than one that's visibly off.

## The constraint

[What you were working inside. The Internet Threat Protection policy presumably belongs to another surface and possibly another team — what did that allow and forbid? Was there a permissions boundary, so that an admin who can toggle logging might not be able to edit the policy? That case shapes the whole design.]

## What I tried

[What you proposed first and why it wasn't enough. Rewriting the two messages to be clearer and more actionable is the obvious cheaper fix — if you argued for the embed over a copy fix, this is where that argument goes.]

## What I shipped

The messages were accurate. That was the problem — being accurate was all they could do. Both pointed at a policy screen elsewhere in the console and asked the admin to go finish the job there, which meant leaving the task they were in, finding an object they may not have known was related, and knowing which setting inside it mattered.

Embedding the Internet Threat Protection policy configuration directly in the AI visibility surface removed the trip. The dependency still exists in the system, but it stops being the admin's problem to route around: the toggle and the setting that makes the toggle mean something live in the same place, and turning the feature on turns the feature on.

[Add screenshots — the toggle with the error and warning, and the embedded configuration that replaced them. Rebuild them unbranded, as in the Device Geolocation sample. Include any strings you wrote for the embedded panel: its heading, and help text explaining what the setting does and why it's here.]

[Note how you handled the admin who already has that policy configured — the "already done" case is the one that usually gets left out.]

## What changed

[The result — admins reaching populated logs without a support ticket, a drop in "logging is on but empty" reports, or whether the embed-the-dependency pattern carried to other features with cross-console prerequisites.]
