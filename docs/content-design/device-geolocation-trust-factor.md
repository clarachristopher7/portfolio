---
sidebar_position: 1
---

# Device Geolocation Trust Factor

**Surface:** Trust Factor configuration, Cloud Secure Edge admin console. Admins build a device's Trust Level out of individual Trust Factors; each can deny access, downgrade trust, or do nothing.

**My role:** Wrote the in-product strings. Recommended the layout change.

## The problem

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

**The label wasn't a label.** *"Select the countries where devices with this Trust Factor are:"* only resolves if you read the Allowed/Blocked toggle, far to the right, as its last word. It also names the data model, not the task.

**The screen never stated the rule.** `Blocked` plus a chip reading `Algeria` is two facts the admin has to combine, under a label that never said which direction the logic ran. Get it backwards and you ship the opposite policy, with nothing on screen to contradict you.

**The outcome sat above its inputs.** The meter reports what happens if the factor isn't satisfied, which is downstream of every control in the card.

## The constraint

[What you were writing against: component width limits, no engineering time for new states, terminology fixed by the published docs.]

## What I tried

[What you rejected. Did you attempt a clearer meter description before arguing to move it?]

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

The added line reuses the meter's own phrasing below it, *"If this Factor is not satisfied…"*, so the two read as one thought. It sits under the chips, after the selection it describes.

Moving the meter below the inputs puts the card in the order the admin already thinks in: what am I checking, what counts as passing, what happens if it fails.

## What changed

[Whether the pattern carried to the other Trust Factors, or any support signal on misconfigured geolocation policy.]
