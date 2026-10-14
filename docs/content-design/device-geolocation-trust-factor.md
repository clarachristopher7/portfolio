---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can allow or block employee devices by geolocation. A device that attempts to connect from a blocked country loses access to company apps. The UI settings never stated the rule the admin was building, and the layout worked against the logic of that rule.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps. Admins shape those decisions with trust factors. Each trust factor checks one fact about a device, such as its operating system or its location.</p>
  <p>Together, the results set the device's trust level. When a device fails a trust factor, Cloud Secure Edge lowers its trust level or blocks it, depending on how the admin set up that factor.</p>
  <p>This sample covers the geolocation trust factor. I rewrote the copy on its settings screen. I also suggested moving the trust effect meter below the settings that control it.</p>
</div>

## The problem

![A prototype of the trust factor before the revision. Callout 1 points to the label, 2 to the Allowed and Blocked switch at the far right, 3 to the country list, which has no rule under it, and 4 to the trust effect meter above the settings.](/img/content-design/device-geolocation-before.webp)

In this example, the admin selected Christmas Island and set the switch to **Blocked**. That means a device passes the check only when it's located outside Christmas Island. A device in Christmas Island fails the check, so its trust level drops (to Medium or Low, for example) and it loses access to company apps.

1. **The label is an unfinished sentence.** "Select the countries where devices with this Trust Factor are:" stops before it says what happens to those countries. The answer, **Allowed** or **Blocked**, is on a switch at the far right of the screen. An admin who reads the label alone can't tell whether the countries they pick will be allowed or blocked.
2. **The switch that finishes it is at the far right.** After reading the label, the eye moves down to the country list, not across the screen. It's easy to miss the switch, or to treat it as a separate setting.
3. **Nothing states the rule.** *(A device must be located outside Christmas Island to pass the check.)* An admin who read the switch the other way would think that devices in Christmas Island pass. They would save a policy that did the opposite of what they wanted, and nothing on the screen would warn them.
4. **The result comes first.** The trust effect meter shows what happens to a device that fails the check. It appears above the settings that decide which devices fail.

## The approach

I made three changes to the same screen. I rewrote the label so that it names both choices, block and allow. I added a sentence under the country list that states the rule in words. I also moved the trust effect meter below the settings, because the meter shows a result of those settings.

![A prototype of the trust factor after the revision. Callouts point to the label, which names both choices, the sentence that states the rule, and the trust effect meter, which now comes last.](/img/content-design/device-geolocation-after-annotated.webp)

<div className="hl-after">

| | Before | After |
|---|---|---|
| **Label** | Select the countries where devices with this Trust Factor are: | Select countries to block or allow: |
| **Rule** | *(none)* | To satisfy the Trust Factor, the device must be located outside of the selected countries. |
| **Trust effect meter** | At the top, above the settings | At the bottom, below the settings |
| **Reading order** | What happens on failure, then the settings that decide it | What the factor checks, then what counts as a pass, then what happens on failure |

</div>

## The constraint

<div className="ts-steps">

1. Every trust factor in the console uses the same card component, which has four parts: a label, settings, a description, and a trust effect meter. Under the UI team's requirements, I couldn't add a new control or a new kind of warning. I could change only the words and the order of the parts.
2. The words had limits too: Trust Factor and Trust Level are proprietary terms across the console and the docs. The new copy had to use them exactly as they were.
3. Finally, because the card component is shared, a change to its order would apply to every trust factor. So the new order had to make sense for trust factors that check very different things, like the OS version or whether the device's firewall is on.

</div>

## The outcome

The lead front-end engineer used the same order for every trust factor, because the order made sense for all of them. Each card now lists its settings first, states its rule, and ends with the trust effect meter.

![A trust profile with four trust factors. They are Device Geolocation, Operating System Version, Disk Encryption, and Firewall. Each card shows its settings, then a sentence that states its rule, then the trust effect meter.](/img/content-design/trust-factors-after.webp)

<p className="shot-cap">A prototype of one trust profile with four trust factors. The settings in each card are examples. The order of the parts is the same on every card.</p>
