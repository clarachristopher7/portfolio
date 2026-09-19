---
hide_table_of_contents: true
sidebar_position: 1
---

# Device Geolocation Trust Factor

> **Why this one:** Configuration screens need copy that carries logic, not just tone. The admin is setting a security policy, and the screen has to show what rule they are building before they save it. It also covers a layout change I asked for, because reordering the card fixed something wording could not.

**Surface:** Trust Factor configuration, Cloud Secure Edge admin console. Admins build a device's Trust Level out of individual Trust Factors. Each one can deny access, lower the trust level, or do nothing.

## The problem

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

The field label read *"Select the countries where devices with this Trust Factor are:"*. It only makes sense if you read the Allowed/Blocked toggle on the far right as the end of the sentence. It also describes how the system stores the setting rather than what the admin is doing.

The screen never said what the configuration meant. A toggle set to `Blocked` and a chip reading `Algeria` are two separate facts, and nothing said which way the logic ran. An admin who read it the wrong way round would save a policy that did the opposite of what they intended, and nothing on the screen would have told them.

The Trust Effect meter sat at the top of the card. It shows what happens when the factor is not satisfied, which depends on the settings underneath it.

## The constraint

[What you were working with: component width limits, no engineering time for new states, terminology already fixed by the published docs.]

## What I tried

[What you ruled out. Whether you tried rewriting the meter description before asking to move it.]

## What I shipped

![The factor after the revision: rewritten label, a line stating the rule, and the meter moved below the inputs.](/img/content-design/device-geolocation-after.png)

| Version | Label |
|---|---|
| **Before** | Select the countries where devices with this Trust Factor are: |
| **After** | Select countries to block or allow: |

| Version | Rule |
|---|---|
| **Before** | *(no equivalent string)* |
| **After** | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

The new line uses the same phrasing as the meter description below it, *"If this Factor is not satisfied…"*, so the two sentences match. It sits under the country chips, after the selection it describes.

Moving the meter below the inputs puts the card in the order the admin works through it: what is being checked, what counts as passing, and what happens if it fails.

## What changed

The lead UI engineer applied the same reordering to every Trust Factor. The reason held anywhere a Trust Effect meter sat above the settings that determine it.
