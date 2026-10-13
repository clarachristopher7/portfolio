---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts that employees send to AI tools. The logging switch seemed to work, but Cloud Secure Edge captured nothing until an admin changed a second setting on another screen.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps and websites. It can also log the prompts that employees send to AI tools such as ChatGPT, so admins can see what employees share.</p>
  <p>Prompts travel over encrypted connections. Cloud Secure Edge can read a prompt only if it has permission to decrypt that traffic. Admins give that permission in the Internet Threat Protection policy, which is on a different screen.</p>
  <p>The product designer and I argued that admins should finish this setup before they turn on logging. I prototyped two ways to connect the decryption setting to logging.</p>
</div>

## The problem

![The logging screen before the redesign. Callout 1 points to the logging switch, which is on. Callout 2 points to the close button on a warning about unfinished setup. Callout 3 points to an empty log that says "No data yet".](/img/content-design/ai-prompt-before-annotated.png)

<p className="shot-cap">In this version, an admin can turn on logging before setup is finished.</p>

1. **Logging turns on right away.** The switch works even though decryption isn't set up, so Cloud Secure Edge can't capture any prompts yet.
2. **The warning can be dismissed.** The warning names the missing step, but the admin can close it and leave the screen with setup unfinished.
3. **The log stays empty.** An admin who comes back later may have forgotten about the unfinished setup. The empty log suggests that employees aren't using AI tools, when Cloud Secure Edge was never capturing their prompts.

## What I tried

My first prototype moved the decryption setting onto the logging screen, above the logging switch. The admin could finish setup in one place, so the warning was no longer needed.

![The first prototype. The decryption setting is directly above the logging switch, and a line confirms how many devices are logged.](/img/content-design/ai-prompt-after.png)

<p className="shot-cap">The screen lists each Internet Threat Protection policy with the number of devices that it covers and a decryption switch. A line under the logging switch confirms how many devices Cloud Secure Edge is logging.</p>

## The constraint

Turning on logging couldn't turn on decryption for the admin. Decryption lets Cloud Secure Edge read all the encrypted traffic that a policy covers, not only AI prompts. That choice affects employee privacy, so an admin has to make it deliberately.

Decryption also had to stay a single setting in the Internet Threat Protection policy. Other features depend on it too. A separate decryption switch for AI prompts would let the two settings disagree.

## The outcome

The constraint pointed to a better home for the switch. The second prototype puts the decryption switch inside the Internet Threat Protection policy, next to the policy's other settings. Decryption is a policy setting, so the policy is where admins expect to find it.

![The second prototype. An Internet Threat Protection policy has a TLS decryption tab with a decryption switch, a list of the features that use decryption, and a list of categories that are never decrypted.](/img/content-design/ai-prompt-itp-policy.png)

Under the switch, a **Used by** list names each feature that needs decryption and shows its status. AI prompt visibility appears there with the number of devices that it logs. An admin can see what turning off decryption would stop, and can open **Prompt Visibility** from the policy.

A **Don't decrypt** list names the categories that the policy never decrypts, such as financial services and health. Admins can protect employee privacy in the same place where they turn on decryption.

Both designs are prototypes. The team hasn't built them yet. [Add a result.]
