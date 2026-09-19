---
sidebar_position: 3
---

# AI prompt visibility

> **Why this one:** The error message was accurate and still not useful, because it described a step the admin had to take somewhere else. This one is about a decision on when a feature should become usable, and about removing two messages by putting the setting itself on the screen.

**Surface:** AI visibility in the Cloud Secure Edge admin console, where admins view user prompt logs from AI applications.

## The problem

Turning on prompt logging needed a second step in a different part of the console: a setting inside an Internet Threat Protection policy. Without it, logging ran but nothing appeared on screen.

There were two views on how that should work. One was to let admins turn logging on straight away and leave the Internet Threat Protection configuration for later, so setup stayed light and data would be accumulating by the time they came back to look at it. The other, which the designer and I proposed, was to have the admin set the feature up first, so that turning it on produced a working feature.

The version in the console took the first route and covered the gap with an error and a warning, fired the moment the admin flipped the toggle.

[The two strings as they appeared. They are the "before", and the exact wording is the evidence.]

The admin had followed the screen, and the system was working as built. The messages were reporting that the feature needed a second setting before it would show anything, and two messages is a lot of text to explain one setting that could have been on the screen instead.

The larger problem was what happened if the admin dismissed them. The toggle stayed on and logging ran, so the feature looked enabled, but the log screen stayed empty. An empty screen looks the same as an organisation that barely uses AI tools, so nothing prompted a second look.

## The constraint

[Whether the Internet Threat Protection policy belonged to another surface or team, and what that allowed. Whether an admin who can turn logging on is always able to edit that policy.]

## What I tried

[Whether you proposed rewriting the two messages first, and what made the embedded setting the better answer. Also worth recording: how the case for configuring first was made, and what evidence moved it.]

## What I shipped

Both messages pointed at a policy screen elsewhere and asked the admin to finish the job there. That meant leaving the task, finding an object they might not know was related, and knowing which setting mattered.

Putting the Internet Threat Protection setting into the AI visibility screen removes that trip. The dependency still exists in the system, but the admin no longer has to route around it.

It also settles the question of when the feature should become usable. Keeping setup light and having the toggle produce a working feature stop being alternatives once the configuration is on the same screen, so there is no longer a cost to doing it in the right order.

[Screenshots of the toggle with its error and warning, and the embedded configuration that replaced them, rebuilt unbranded.]

[What an admin sees who already has that policy configured.]

## What changed

[Whether admins reached populated logs without raising a ticket, whether "logging is on but empty" reports dropped, or whether the same approach was used for other features with a prerequisite elsewhere.]
