---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can allow or block employee devices by country. A device that connects from a blocked country can lose access to company apps. The settings screen collected the right information, but it never stated the rule the admin was building. Its layout also worked against the logic of that rule.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps. Admins shape those decisions with trust factors. Each trust factor checks one fact about a device, such as its operating system or its location.</p>
  <p>Together, the results set the device's trust level. When a device fails a trust factor, Cloud Secure Edge lowers its trust level or blocks it, depending on how the admin set up that factor.</p>
  <p>This sample covers the geolocation trust factor. I rewrote the copy on its settings screen. I also suggested moving the trust effect meter below the settings that control it.</p>
</div>

## Before

![A prototype of the trust factor before the revision. The trust effect meter is above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The trust effect meter at the top shows what happens to a device that fails the check. The meter appears before the settings that control it. The <b>Allowed</b> and <b>Blocked</b> switch is at the far right, away from the label that it completes.</p>

## The problem

The label said "Select the countries where devices with this Trust Factor are:". The sentence makes sense only if you read the **Allowed** and **Blocked** switch at the far right as its last word.

In the prototype, the admin selected Algeria and set the switch to **Blocked**. That setting means a device passes the check only if it is outside Algeria. A device in Algeria fails the check, and the trust effect meter decides what happens to it next.

The screen never stated that rule in words. An admin who read the switch the other way would think that devices in Algeria pass. They would save a policy that did the opposite of what they wanted, and nothing on the screen would warn them.

## The constraint

Every trust factor in the console uses the same card. The card has four parts. They are a label, the settings, a description, and the trust effect meter. I couldn't add a new control or a new kind of warning. I could change only the words and the order of the parts.

The words had limits too. Trust Factor and Trust Level are defined terms across the console and the docs. The new copy had to use them exactly as they were, capitals included.

Because the card is shared, a change to its order would apply to every trust factor. So the new order had to make sense for factors that check very different things, not only for location.

## What I tried

I made three changes to the same screen. I rewrote the label so that it names both choices, block and allow. I added a sentence under the country list that states the rule in words. I also moved the trust effect meter below the settings, because the meter shows a result of those settings.

## After

![A prototype of the trust factor after the revision. The label is rewritten, a sentence states the rule, and the meter is below the settings.](/img/content-design/device-geolocation-after.png)

| | Before | After |
|---|---|---|
| **Label** | Select the countries where devices with this Trust Factor are: | Select countries to block or allow: |
| **Rule** | *(none)* | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

The new sentence uses the same words as the meter description, "If this Factor is not satisfied...". The two sentences now read as one rule. The meter now comes after the settings, so the screen follows the order in which an admin decides. First the admin sees what the factor checks, then what counts as a pass, and last what happens when a device fails.

## The outcome

The lead front-end engineer used the same order for every trust factor, because the order made sense for all of them. Each card now lists its settings first, states its rule, and ends with the trust effect meter.

![A trust profile with four trust factors. They are Device Geolocation, Operating System Version, Disk Encryption, and Firewall. Each card shows its settings, then a sentence that states its rule, then the trust effect meter.](/img/content-design/trust-factors-after.png)

<p className="shot-cap">A prototype of one trust profile with four trust factors. The settings in each card are examples. The order of the parts is the same on every card.</p>
