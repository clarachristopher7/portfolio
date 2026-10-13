---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can block or allow devices based on the country they’re in. The screen collected all the right inputs, but it never told you what rule you’d just built.</p>

<dl className="ctx">
  <div><dt>The product</dt><dd>Cloud Secure Edge, a SonicWall service that checks each time an employee’s device tries to reach a company app or website, and decides whether to let it through.</dd></div>
  <div><dt>Who uses it</dt><dd>IT and security admins.</dd></div>
  <div><dt>What they’re doing</dt><dd>Setting up trust factors. Each one is a check on a device, like its operating system or where it is, and together they decide how much the device is trusted. If a device fails a check, it can lose trust or be blocked outright.</dd></div>
  <div><dt>My part</dt><dd>I rewrote the copy on this screen and suggested moving the trust effect meter below the settings it depends on.</dd></div>
</dl>

## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The meter at the top shows what happens to a device that fails the check, but it sits above the settings that decide that. The Allowed and Blocked switch is all the way over on the right.</p>

## The problem

The label read *“Select the countries where devices with this Trust Factor are:”*. It only makes sense if you read the Allowed and Blocked switch on the far right as the end of the sentence. Nothing on the screen spelled out the rule, either. If you read the logic backwards, you’d save a policy that did the opposite of what you meant, and nothing would warn you.

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

The new sentence states the rule in the same words as the meter’s description, *“If this Factor is not satisfied…”*, so the two read as one thought. The meter now comes after the settings, so the screen follows the order you think in: what’s being checked, what counts as passing, and what happens if a device fails.

## The outcome

The lead front-end engineer ended up using the same order for every trust factor, since it made sense for all of them.
