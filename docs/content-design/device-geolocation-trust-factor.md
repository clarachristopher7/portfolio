---
sidebar_position: 1
---

# Device Geolocation Trust Factor

> **Why this one:** Configuration UI is where microcopy has to carry logic, not just tone. The admin is assembling a security policy, and the screen has to make the rule they're building legible before they save it. This sample also includes a layout change I argued for on the same grounds — some reading-order problems can't be solved with better words.

**Surface:** The Trust Factor configuration screen in the Cloud Secure Edge admin console. Admins compose a device's Trust Level out of individual Trust Factors, each of which can deny access outright, downgrade the device to Low or Medium trust, or have no effect. Device Geolocation evaluates a device based on where it is.

**Audience:** IT and security admins configuring device posture — often setting a factor once and not returning to it for months.

**My role:** Wrote the in-product strings for the factor, and recommended the layout change.

## The problem

![The factor before the revision: the Trust Effect meter sits at the top of the card, above the country selector and its options.](/img/content-design/device-geolocation-before.png)

Three faults, compounding.

**The field label wasn't a label.** *"Select the countries where devices with this Trust Factor are:"* is a sentence fragment that only resolves if you read the Allowed/Blocked toggle, sitting far to the right, as its final word. An admin scanning down the left column hits a colon and no predicate. It also describes the data model rather than the task — "devices with this Trust Factor" is how the system stores the relationship, not what the admin came to do.

**The screen never stated the rule it was building.** `Blocked` plus a chip reading `Algeria` is not a rule; it's two facts the admin has to combine correctly, under a label that already failed to tell them which direction the logic ran. Getting it backwards means shipping a posture policy that does the opposite of what was intended, and nothing on the screen would contradict them.

**The outcome was printed above its inputs.** The Trust Effect meter reports a *result* — what happens to the device if the factor isn't satisfied — and that result is downstream of every control in the card. Reading it first means holding an outcome in memory while scrolling past the configuration that determines it.

## The constraint

[What you were writing against — character or width limits from the existing component library, no engineering time for new UI states, terminology that had to match the published docs, a release deadline. Name the ones that actually shaped the wording, and the fix you'd have preferred if they hadn't.]

## What I tried

[What you considered and rejected. Did you try to fix the meter with a clearer description before arguing to move it? Was there a longer label that tested badly, or a tooltip you turned down in favour of always-visible text? This section is what separates a decision from a preference — it's the one a hiring manager reads closest.]

## What I shipped

![The factor after the revision: a rewritten field label, a new line stating the rule the selection produces, and the Trust Effect meter moved below the inputs.](/img/content-design/device-geolocation-after.png)

### The field label

| Version | String |
|---|---|
| **Before** | Select the countries where devices with this Trust Factor are: |
| **After** | Select countries to block or allow: |

States the action and lets the toggle be a control rather than the end of a sentence. Nine words to say what the fragment couldn't say in eleven.

### The rule the configuration produces

| Version | String |
|---|---|
| **Before** | *(no equivalent string)* |
| **After** | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

States the resulting condition in the vocabulary the rest of the factor already uses. "Satisfy the Trust Factor" is the same phrase the meter's own description uses below it — *"If this Factor is not satisfied, the device's Trust level will be set to medium"* — so the two sentences read as one continuous thought instead of two separate features. It sits under the country chips rather than under the label, because it describes the consequence of the selection.

### The meter placement

Moved below the configurable inputs, putting the card in the order the admin is already thinking in:

> what am I checking → what counts as passing → what happens if it fails

## What changed

[The result. Whether the pattern carried to the other Trust Factors, support or field feedback on misconfigured geolocation policy, whether "state the resulting rule" became a convention elsewhere in the console. If you don't have numbers, a sentence on what the team did differently afterwards still counts.]
