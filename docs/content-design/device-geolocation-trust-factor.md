---
hide_table_of_contents: true
sidebar_position: 1
---

# Geolocation trust factor

<p className="hub-sub">Admins can restrict access based on the country a device is in. The configuration screen collected every input but never stated the rule those inputs produced.</p>

<dl className="ctx">
  <div><dt>The product</dt><dd>Cloud Secure Edge, a SonicWall security service that checks every attempt by an employee’s device to reach company applications and websites, and decides whether to allow it.</dd></div>
  <div><dt>Who uses it</dt><dd>IT and security administrators.</dd></div>
  <div><dt>What they’re doing</dt><dd>Configuring trust factors: individual checks on a device, such as its operating system or location, that together set its trust level. A device that fails a factor can be denied access or have its trust level lowered.</dd></div>
  <div><dt>My part</dt><dd>I rewrote the screen’s copy and proposed moving the trust effect meter below the settings it depends on.</dd></div>
</dl>

## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The trust effect meter, which shows what happens to a device that fails the check, sits above the settings that determine it. The Allowed and Blocked switch sits at the far right of the label.</p>

## The problem

The label, *“Select the countries where devices with this Trust Factor are:”*, only resolves if the reader treats the Allowed and Blocked switch at the far right as the end of the sentence. Nothing on the screen stated the resulting rule, so an admin who read the logic backwards would save a policy that did the opposite of what they intended, with no warning.

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

The new sentence states the rule in the same terms as the meter’s description, *“If this Factor is not satisfied…”*, so the two read as one statement. The meter now follows the settings, so the screen reads in the order an admin works: what is checked, what counts as passing, and what happens on failure.

## The outcome

The lead front-end engineer applied the same ordering to every trust factor.
