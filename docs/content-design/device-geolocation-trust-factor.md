---
hide_table_of_contents: true
sidebar_position: 1
---

# Device location rule

<p className="hub-sub">Admins can block or allow devices based on the country they're in. The screen never said which way the rule worked.</p>

<dl className="ctx">
  <div><dt>The product</dt><dd>Cloud Secure Edge, a SonicWall service that controls which employees and devices can reach a company’s apps and websites.</dd></div>
  <div><dt>Who uses it</dt><dd>IT admins who set the company’s security rules.</dd></div>
  <div><dt>What they’re doing</dt><dd>Deciding which devices are safe enough to let in. One check is location: an admin can block or allow devices by country. A device that fails a check can be refused access.</dd></div>
  <div><dt>My part</dt><dd>I rewrote the screen’s text and proposed a new layout.</dd></div>
</dl>


## Before

![The factor before the revision: the Trust Effect meter sits above the country selector and its options.](/img/content-design/device-geolocation-before.png)

<p className="shot-cap">The meter at the top shows what happens to a device that fails the check. Below it: a country picker, and a Blocked or Allowed switch on the far right.</p>

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
