---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can allow or block devices by country. The screen collected the right settings, but it never said what rule those settings made.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a SonicWall service that decides whether an employee's device can connect to company apps and websites. Admins control those decisions with trust factors. Each trust factor checks one thing about a device, such as its operating system or its location.</p>
  <p>The results set the device's trust level. If a device fails a trust factor, Cloud Secure Edge can lower its trust level or block it.</p>
  <p>This sample is about the geolocation trust factor, which lets admins allow or block devices by country. I rewrote the copy on its settings screen. I also suggested moving the trust effect meter below the settings that control it.</p>
</div>

## Before

![The trust factor before the revision. The trust effect meter is above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The trust effect meter at the top shows what happens to a device that fails the check. The meter appears before the settings that control it. The <b>Allowed</b> and <b>Blocked</b> switch is at the far right, away from the label that it completes.</p>

## The problem

The label said "Select the countries where devices with this Trust Factor are:". The sentence makes sense only if you read the **Allowed** and **Blocked** switch at the far right as its last word.

In the screenshot, the admin selected Algeria and set the switch to **Blocked**. That setting means a device passes the check only if it is outside Algeria. A device in Algeria fails the check, and the trust effect meter decides what happens to it next.

The screen never stated that rule in words. An admin who read the switch the other way would think that devices in Algeria pass. They would save a policy that did the opposite of what they wanted, and nothing on the screen would warn them.

## The constraint

[Add: what you were working with.]

## What I tried

I made three changes to the same screen. I rewrote the label so that it names both choices, block and allow. I added a sentence under the country list that states the rule in words. I also moved the trust effect meter below the settings, because the meter shows a result of those settings.

## After

![The trust factor after the revision. The label is rewritten, a sentence states the rule, and the meter is below the settings.](/img/content-design/device-geolocation-after.png)

| | Before | After |
|---|---|---|
| **Label** | Select the countries where devices with this Trust Factor are: | Select countries to block or allow: |
| **Rule** | *(none)* | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

The new sentence uses the same words as the meter description, "If this Factor is not satisfied...". The two sentences now read as one rule. The meter now comes after the settings, so the screen follows the order in which an admin decides. First the admin sees what the factor checks, then what counts as a pass, and last what happens when a device fails.

## The outcome

The lead front-end engineer used the same order for every trust factor, because the order made sense for all of them.
