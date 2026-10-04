---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts employees send to AI tools. The feature appeared to be on, but captured nothing until a second setting, on a different screen, was configured.</p>

<dl className="ctx">
  <div><dt>The product</dt><dd>Cloud Secure Edge, a SonicWall security service that checks every attempt by an employee’s device to reach company applications and websites, and decides whether to allow it.</dd></div>
  <div><dt>Who uses it</dt><dd>IT and security administrators.</dd></div>
  <div><dt>What they’re doing</dt><dd>Turning on prompt logging to see what employees share with AI tools such as ChatGPT. Prompts travel over encrypted connections, so the service can only read them if it is permitted to decrypt that traffic. That permission is set in the organization’s web filtering policy, on a separate screen.</dd></div>
  <div><dt>My part</dt><dd>The product designer and I argued that admins should complete this setup before logging is switched on, and proposed bringing the decryption setting into the same flow.</dd></div>
</dl>

## Before

![The screen as it shipped: the AI logging switch is on, a warning below it says a security setting still has to be set up elsewhere, and the log reads "No data yet".](/img/content-design/ai-prompt-before.png)

<p className="shot-cap">As shipped, logging could be switched on immediately. A warning beneath the switch pointed to the decryption setting on another screen.</p>

## The problem

An admin could dismiss the warning and leave with logging apparently enabled. The log then stayed empty, which looks exactly like an organization that rarely uses AI tools, so nothing prompted a second look.

## The constraint

[Add: what you were working with.]

## What I tried

[Add: what you ruled out.]

## After

![The proposed screen: the missing security setting sits right above the AI logging switch, with a line confirming how many devices are being logged.](/img/content-design/ai-prompt-after.png)

In the proposed flow, the decryption setting sits directly above the logging switch, listed for each web filtering policy alongside the number of devices it covers. The admin enables decryption where prompts should be captured, then turns logging on, and a line confirms how many devices are now being logged. This design was proposed and not built.

## The outcome

[Add a result.]
