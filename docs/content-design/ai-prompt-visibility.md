---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts that employees send to AI tools. In the product manager's prototype, the logging switch seemed to work, but Cloud Secure Edge would capture nothing until an admin changed a second setting in another part of the admin console.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps and websites. It can also log the prompts that employees send to AI tools such as ChatGPT. Employees sometimes paste sensitive information into these tools, such as customer records, source code, or internal documents. Once that information leaves the company, the company can't control where it goes. The log shows admins what's being shared, so they can catch leaks and set clear rules for using AI.</p>
  <p>Prompts travel over encrypted connections. Cloud Secure Edge can read a prompt only if it has permission to decrypt that traffic. Admins give that permission in the Internet Threat Protection policy, which is in a different part of the admin console.</p>
</div>

## The problem

![The product manager's prototype of the logging screen. Callout 1 points to the logging switch, which shows as on even though nothing is logged. Callout 2 points to the close button on a warning about unfinished setup. Callout 3 points to an empty log that says "No data yet".](/img/content-design/ai-prompt-before-annotated.png)

<p className="shot-cap">The product manager's prototype.</p>

1. **An admin can toggle on the switch** before decryption is set up.
2. **The warning can be dismissed.** The warning names the missing step, but the admin can close it and leave the screen with setup unfinished.
3. **An admin who comes back later** may recall turning on AI prompt visibility and see an empty log, thus wrongly concluding that employees aren't using AI tools.

## The approach

My first prototype moved the decryption setting onto the logging screen, above the logging switch. The admin could finish setup in one place, so the warning was no longer needed.

![The first prototype. Callouts point to the decryption setting on the same screen as logging, the device count for each policy, and the line that confirms how many devices are logged.](/img/content-design/ai-prompt-after-annotated.png)

<p className="shot-cap">The screen lists each Internet Threat Protection policy with the number of devices that it covers and a decryption switch. A line under the logging switch confirms how many devices Cloud Secure Edge is logging.</p>

## The constraint

Turning on decryption lets Cloud Secure Edge read all encrypted traffic that one policy covers, not just the AI prompts. Making it too easy to turn on would introduce employee privacy issues and apply the setting too broadly.

## The outcome

The constraint pointed to a better home for the switch. The second prototype puts the decryption switch inside the Internet Threat Protection policy, next to the policy's other settings. Decryption is a policy setting, so the policy is where admins expect to find it.

![The second prototype. An Internet Threat Protection policy has a TLS decryption tab with a decryption switch, a list of the features that use decryption, and a list of categories that are never decrypted.](/img/content-design/ai-prompt-itp-policy.png)

Under the switch, a **Used by** list names each feature that needs decryption and shows its status. AI prompt visibility appears there with the number of devices that it logs. An admin can see what turning off decryption would stop, and can open **Prompt Visibility** from the policy.

A **Don't decrypt** list names the categories that the policy never decrypts, such as financial services and health. Admins can protect employee privacy in the same place where they turn on decryption.

Both designs are prototypes. The team hasn't built them yet. [Add a result.]
