---
sidebar_position: 3
---

# AI prompt visibility

**Surface:** AI visibility in the Cloud Secure Edge admin console, where admins view user prompt logs from AI applications.

**My role:** Recommended replacing the post-toggle error and warning with an embedded Internet Threat Protection policy configuration.

## The problem

Turning on prompt logging required a second step in an unrelated place: a setting inside an Internet Threat Protection policy. Without it, logging ran but the logs never populated the screen. The original design fired an error and a warning the moment the admin flipped the toggle.

[The two strings verbatim. They're the "before," and the exact wording is the evidence.]

Three faults, worsening:

**The admin did the right thing and got an error.** Nothing had failed. The error reported that the product was incomplete.

**Two messages did the work of one control.** That much explanation usually means the thing being explained shouldn't exist.

**Dismissing them hid the failure.** The toggle stayed on, logging ran, and the screen stayed empty. The admin's belief was right about the toggle and wrong about the outcome, and an empty log screen looks exactly like an organization that barely uses AI tools. A security feature that silently reports nothing is worse than one that's visibly off.

## The constraint

[The ITP policy belongs to another surface, possibly another team. What did that allow? Was there a permissions boundary, where an admin who can toggle logging can't edit the policy?]

## What I tried

[Rewriting the two messages is the obvious cheaper fix. If you argued for the embed over a copy fix, that argument goes here.]

## What I shipped

The messages were accurate, and accurate was all they could be. Both pointed elsewhere and asked the admin to finish the job there: leave the task, find an object they may not know is related, and know which setting matters.

Embedding the policy configuration in the AI visibility surface removes the trip. The dependency still exists in the system; it stops being the admin's to route around, and turning the feature on turns the feature on.

[Screenshots of the toggle with its error and warning, and the embedded configuration that replaced them, rebuilt unbranded.]

[What an admin sees who already has the policy configured.]

## What changed

[Admins reaching populated logs without a ticket, a drop in "logging is on but empty" reports, or whether the pattern carried to other cross-console prerequisites.]
