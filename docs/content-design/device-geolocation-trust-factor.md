---
hide_table_of_contents: true
sidebar_position: 1
---

# Device Geolocation Trust Factor

<p className="hub-sub">Admins block or allow devices by country. The screen never said which way the rule ran.</p>

## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

## The problem

The label only made sense if you read the toggle at the far right as the end of the sentence. Nothing stated the rule, so an admin could save the opposite of what they meant.

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

The effect meter moved below the inputs, so the card reads in the order the admin works.

## The outcome

The lead UI engineer applied the same order to every Trust Factor.
