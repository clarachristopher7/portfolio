---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts that employees send to AI tools. The logging switch seemed to work, but Cloud Secure Edge captured nothing until an admin changed a second setting on another screen.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a SonicWall service that decides whether an employee's device can connect to company apps and websites. It can also log the prompts that employees send to AI tools such as ChatGPT, so admins can see what employees share.</p>
  <p>Prompts travel over encrypted connections. Cloud Secure Edge can read a prompt only if it has permission to decrypt that traffic. Admins give that permission in the Internet Threat Protection policy, which is on a different screen.</p>
  <p>The product designer and I argued that admins should finish this setup before they turn on logging. I proposed that the decryption setting appear in the same flow as the logging switch.</p>
</div>

## Before

![The screen as it shipped. The logging switch is on, a warning says that a security setting on another screen still needs setup, and the log says "No data yet".](/img/content-design/ai-prompt-before.png)

<p className="shot-cap">In the shipped version, an admin can turn on logging immediately. A warning under the switch points to the decryption setting on another screen.</p>

## The problem

An admin could dismiss the warning and leave the screen with logging turned on. The log then stayed empty. An empty log looks the same as a log from a company whose employees rarely use AI tools. So the admin had no reason to come back and check the setup.

## The constraint

[Add: what you were working with.]

## What I tried

The warning and the empty log both pointed the admin to a setting on another screen. I proposed moving that setting onto this screen, above the logging switch, so the admin can finish setup in one place. With the setting on the screen, the warning is no longer needed.

## After

![The proposed screen. The decryption setting is directly above the logging switch, and a line confirms how many devices are logged.](/img/content-design/ai-prompt-after.png)

In the proposal, the decryption setting appears directly above the logging switch. The screen lists each Internet Threat Protection policy with the number of devices that it covers and a decryption switch. The admin turns on decryption for each policy that should capture prompts, then turns on logging. A line under the switch confirms how many devices Cloud Secure Edge is logging.

This design is a proposal. The team has not built it.

## The outcome

[Add a result.]
