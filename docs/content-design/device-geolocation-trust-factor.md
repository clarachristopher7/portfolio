---
sidebar_position: 1
---

# Device Geolocation Trust Factor

> **Why this one:** Configuration UI is where microcopy has to carry logic, not just tone. The admin is assembling a security policy, and the screen has to make the rule they're building legible before they save it. This sample also includes a layout change I argued for on the same grounds — some reading-order problems can't be solved with better words.

## Context

**Product:** SonicWall Cloud Secure Edge, a zero trust network access platform.

**Surface:** The Trust Factor configuration screen in the admin console. Admins compose a device's Trust Level out of individual Trust Factors, each of which can deny access outright, downgrade the device to Low or Medium trust, or have no effect. Device Geolocation evaluates a device based on where it is.

**Audience:** IT and security admins configuring device posture — often setting a factor once and not returning to it for months.

**My role:** Wrote the in-product strings for the factor, and recommended the layout change described below.

## Before

[![The Device Geolocation Trust Factor before the revision: the Trust Effect meter sits at the top of the card, above the country selector and its options.](/img/content-design/device-geolocation-before.png)](/img/content-design/device-geolocation-before.png)

## After

[![The Device Geolocation Trust Factor after the revision: a rewritten field label, a new line explaining the rule the selection produces, and the Trust Effect meter moved to the bottom of the card.](/img/content-design/device-geolocation-after.png)](/img/content-design/device-geolocation-after.png)

## The field label

| Version | String |
|---|---|
| **Before** | Select the countries where devices with this Trust Factor are: |
| **After** | Select countries to block or allow: |

The original isn't a label — it's a sentence fragment that only resolves if you read the Allowed/Blocked toggle, sitting far to the right, as its final word. An admin scanning down the left column hits a colon and no predicate.

It also describes the data model rather than the task. "Devices with this Trust Factor" is how the system stores the relationship; it isn't what the admin came to do. They came to name some countries and say what should happen in them.

The revision states the action and lets the toggle be a control rather than the end of a sentence. It costs nine words to say what the fragment couldn't say in eleven.

## The rule the configuration produces

| Version | String |
|---|---|
| **Before** | *(no equivalent string)* |
| **After** | To satisfy the Trust Factor, the device must be located outside of the selected countries. |

The old screen gave the admin every input and never stated the output. `Blocked` plus a chip reading `Algeria` is not a rule — it's two facts the admin has to combine correctly, under a label that already failed to tell them which direction the logic ran. Getting it backwards here means shipping a posture policy that does the opposite of what was intended, and nothing on the screen would contradict them.

The added line states the resulting condition in the vocabulary the rest of the factor already uses. "Satisfy the Trust Factor" is the same phrase the meter's own description uses below it — *"If this Factor is not satisfied, the device's Trust level will be set to medium"* — so the two sentences read as one continuous thought instead of two separate features.

It sits under the country chips rather than under the label, because it describes the consequence of the selection and so belongs after it.

## The layout change

The Trust Effect meter reports a *result*: what happens to the device if the factor isn't satisfied. That result is downstream of every control in the card. In the original, it came first — the admin read an outcome before seeing any of the inputs it depends on, then had to hold it in memory while scrolling past the configuration that determines it.

Moving the meter below the configurable inputs puts the card in the order the admin is already thinking in:

> what am I checking → what counts as passing → what happens if it fails

This one wasn't fixable with copy. I could have written a clearer meter description, but it would still have been an answer printed above its question. Part of the job is recognizing when the sentence isn't the problem.

## Outcome

[Add a concrete result — whether the pattern carried to the other Trust Factors, support or field feedback on misconfigured geolocation policy, adoption of the "state the resulting rule" pattern elsewhere in the console.]
