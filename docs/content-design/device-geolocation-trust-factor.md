---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can block or allow devices based on the country they’re in. The screen collected the right inputs, but it never told you what rule they added up to.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a SonicWall service that decides whether an employee’s device can connect to a company’s apps and websites. Admins control those decisions with trust factors. Each trust factor checks one thing about a device, like its operating system or its location, and the results add up to the device’s trust level. When a device fails a check, it can lose trust or lose access entirely.</p>
  <p>This sample covers the geolocation trust factor, which lets admins allow or block devices by country. I rewrote the copy on its configuration screen and suggested moving the trust effect meter below the settings it depends on.</p>
</div>

## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The meter at the top shows what happens to a device that fails this check, but it appears before the settings that determine that outcome. The Allowed and Blocked switch sits at the far right, away from the label it completes.</p>

## The problem

The label read *“Select the countries where devices with this Trust Factor are:”*. To make sense of it, you had to read the Allowed and Blocked switch on the far right as the end of that sentence. The screen also never stated the rule itself. An admin who misread the logic would save a policy that did the opposite of what they intended, and nothing would warn them.

## The constraint

[Add: what you were working with.]

## What I tried

[Add: what you ruled out.]

## After

![The factor after the revision: rewritten label, a line stating the rule, and the meter moved below the inputs.](/img/content-design/device-geolocation-after.png)

| | Before | After |
|---|---|---|
| **Label** | Select the countries where devices with this Trust Factor are: | Select countries to block or allow: |
| **Rule** | *(none)* | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

The new sentence states the rule in the same words as the meter’s description, *“If this Factor is not satisfied…”*, so the two read as one statement. The meter now comes after the settings, so the screen follows the order you think in: what’s checked, what counts as passing, and what happens when a device fails.

## The outcome

The lead front-end engineer ended up using the same order for every trust factor, since it made sense for all of them.
