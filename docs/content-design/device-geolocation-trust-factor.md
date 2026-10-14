---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can block or allow employee devices by country. On this screen, an admin could pick a country, flip a switch, and save, without ever being told which rule they'd just built. I rewrote the copy so the screen says the rule out loud.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge decides whether an employee's device can connect to company apps. Admins shape those decisions with trust factors. Each one checks a single fact about a device, like its operating system or where it is.</p>
  <p>Together, the results set the device's trust level. Fail a trust factor, and the device's trust level drops, or it gets blocked outright, depending on how the admin set things up.</p>
  <p>This one is the geolocation trust factor. I rewrote the copy on its settings screen, and suggested moving the trust effect meter below the settings that control it.</p>
</div>

## The problem

![A prototype of the trust factor before the revision. Callout 1 points to the label, 2 to the Allowed and Blocked switch at the far right, 3 to the country list, which has no rule under it, and 4 to the trust effect meter above the settings.](/img/content-design/device-geolocation-before.webp)

Here's what's happening in the screenshot. The admin picked Christmas Island and set the switch to **Blocked**. So a device passes only when it's outside Christmas Island. Inside it, the device fails, its trust level drops (to Medium or Low, for example), and it loses access to company apps.

Simple enough, once you know. The screen just never told you.

1. **The label is an unfinished sentence.** "Select the countries where devices with this Trust Factor are:" Are what? The answer, **Allowed** or **Blocked**, sits on a switch at the far right of the screen. Read the label on its own, and you can't tell what happens to the countries you pick.
2. **The switch that finishes it is at the far right.** After the label, your eye drops down to the country list, not across the screen. So the switch is easy to miss, or to read as a separate setting.
3. **Nothing states the rule.** *(A device must be located outside Christmas Island to pass the check.)* Read the switch the other way, and you'd think devices in Christmas Island pass. You'd save a policy that does the opposite of what you meant, and nothing on the screen would warn you.
4. **The result comes first.** The trust effect meter shows what happens to a device that fails. It sits above the settings that decide who fails, so you see the consequence before the cause.

## The approach

I made three changes, all on the same screen. The label now names both choices, block and allow. A new sentence under the country list states the rule in plain words. And the trust effect meter moved to the bottom, because it shows the result of the settings, so it should come after them.

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

The best part came after. The lead front-end engineer used the new order on every trust factor, because it made sense for all of them. Each card now lists its settings, states its rule, and ends with the trust effect meter.

![A trust profile with four trust factors. They are Device Geolocation, Operating System Version, Disk Encryption, and Firewall. Each card shows its settings, then a sentence that states its rule, then the trust effect meter.](/img/content-design/trust-factors-after.webp)

<p className="shot-cap">A prototype of one trust profile with four trust factors. The settings in each card are examples. The order of the parts is the same on every card.</p>
