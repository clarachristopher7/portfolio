---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

> **Why this one:** The error message was accurate and still not useful, because it described a step the admin had to take somewhere else. This one is about a decision on when a feature should become usable, and about removing two messages by putting the setting itself on the screen.

**Surface:** AI visibility in the Cloud Secure Edge admin console, where admins view user prompt logs from AI applications.

## Before

Turning on prompt logging needed a second step in a different part of the console: a setting inside an Internet Threat Protection policy. Without it, logging ran but nothing appeared on screen.

There were two views on how that should work. One was to let admins turn logging on straight away and leave the Internet Threat Protection configuration for later, so setup stayed light and data would be accumulating by the time they came back to look at it. The other, which the designer and I proposed, was to have the admin set the feature up first, so that turning it on produced a working feature.

The version in the console took the first route and covered the gap with an error and a warning, fired the moment the admin flipped the toggle.

![The Prompt Visibility screen as it shipped: the Log AI Prompts toggle is on, a warning below it says TLS decryption still has to be set up, and the panel underneath reads "No data yet".](/img/content-design/ai-prompt-before.png)

Two messages carry the dependency. The warning reads *"Before captured prompts can be shown, you must finish TLS decryption set up below. Otherwise we will log your ai prompts it's just they won't show below."* Under it, the empty panel repeats the same thing: *"Prompts can only be captured from devices that are subject to TLS decryption on their ITP policies."*

## The problem

The admin had followed the screen, and the system was working as built. The messages were reporting that the feature needed a second setting before it would show anything, and two messages is a lot of text to explain one setting that could have been on the screen instead.

The larger problem was what happened if the admin dismissed them. The toggle stayed on and logging ran, so the feature looked enabled, but the log screen stayed empty. An empty screen looks the same as an organisation that barely uses AI tools, so nothing prompted a second look.

## The constraint

[Whether the Internet Threat Protection policy belonged to another surface or team, and what that allowed. Whether an admin who can turn logging on is always able to edit that policy.]

## What I tried

[Whether you proposed rewriting the two messages first, and what made the embedded setting the better answer. Also worth recording: how the case for configuring first was made, and what evidence moved it.]

## After

Both messages pointed at a policy screen elsewhere and asked the admin to finish the job there. That meant leaving the task, finding an object they might not know was related, and knowing which setting mattered.

Putting the Internet Threat Protection setting into the AI visibility screen removes that trip. The dependency still exists in the system, but the admin no longer has to route around it.

It also settles the question of when the feature should become usable. Keeping setup light and having the toggle produce a working feature stop being alternatives once the configuration is on the same screen, so there is no longer a cost to doing it in the right order.

![Proposed screen: the TLS decryption setting sits above the toggle, listing each Internet Threat Protection policy with its device count and a switch to decrypt TLS, followed by the Log AI prompts toggle and a line reading "Logging 38 devices across 1 policy."](/img/content-design/ai-prompt-after.png)

This screen was not built. In the version we proposed, the setting that the warning pointed at moves above the toggle, listing each Internet Threat Protection policy with its device count, so the admin turns decryption on for the policies that should report prompt activity and then turns logging on. The toggle description then says where prompts come from, and a line underneath reports what is actually being logged, which is the confirmation the empty panel could never give.

[What an admin sees who already has that policy configured.]

## The outcome

[Whether admins reached populated logs without raising a ticket, whether "logging is on but empty" reports dropped, or whether the same approach was used for other features with a prerequisite elsewhere.]
