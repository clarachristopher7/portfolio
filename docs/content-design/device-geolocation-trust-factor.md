---
hide_table_of_contents: true
sidebar_position: 1
---

# Device location rule

<p className="hub-sub">Admins can block or allow devices based on the country they're in. The screen never said which way the rule worked.</p>

## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

## The problem

The label only made sense if you read the switch on the far right as the end of the sentence. Nothing stated the rule, so an admin could easily set up the opposite of what they meant.

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

I also moved the result meter below the settings, so the screen reads in the order the admin fills it in.

## The outcome

The lead front-end engineer used the same layout for every security check of this kind.
