---
hide_table_of_contents: true
sidebar_position: 3
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts that employees send to AI tools. In the product manager's prototype, the logging switch seemed to work, but Cloud Secure Edge would capture nothing until an admin changed a second setting in another part of the admin console.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps and websites. It can also log the prompts that employees send to AI tools such as ChatGPT. Employees sometimes paste sensitive information into these tools, such as customer records, source code, or internal documents. Once that information leaves the company, the company can't control where it goes. The log shows admins what's being shared, so they can catch leaks and set clear rules for using AI.</p>
  <p>Prompts travel over encrypted connections. Cloud Secure Edge can read a prompt only if it has permission to decrypt that traffic. Admins turn on decryption in an Internet Threat Protection policy, which is in a different part of the admin console. Each policy applies to specific user roles, so decryption, and prompt logging with it, covers only the employees in those roles.</p>
</div>

## The problem

![The product manager's prototype of the logging screen. Callout 1 points to the logging switch, which shows as on even though nothing is logged. Callout 2 points to the close button on a warning about unfinished setup. Callout 3 points to an empty log that says "No data yet".](/img/content-design/ai-prompt-before-annotated.webp)

<p className="shot-cap">The product manager's prototype.</p>

1. **Setup can be skipped.** An admin can toggle on the switch before decryption is set up.
2. **The warning can be dismissed.** The warning names the missing step, but the admin can close it and leave the screen with setup unfinished.
3. **An empty log misleads.** An admin who comes back later may recall turning on AI prompt visibility and see an empty log, thus wrongly concluding that employees aren't using AI tools.

## The approach

My first prototype moved the decryption setting onto the logging screen, above the logging switch. The admin could finish setup in one place, so the warning was no longer needed.

![The first prototype. Callouts point to the decryption setting on the same screen as logging, the device count for each policy, and the line that confirms how many devices are logged.](/img/content-design/ai-prompt-after-annotated.webp)

<p className="shot-cap">The screen lists each Internet Threat Protection policy with the number of devices that it covers and a decryption switch. A line under the logging switch confirms how many devices Cloud Secure Edge is logging.</p>

<div className="hl-after">

| | Before | After |
|---|---|---|
| **Where decryption is set up** | In the Internet Threat Protection policy, in another part of the admin console | On the logging screen, above the logging switch |
| **Order of setup** | Logging first, decryption later and somewhere else | Decryption first, then logging |
| **Warning** | Can be dismissed while setup is unfinished | Not needed |
| **Confirmation** | "No data yet" | "Logging 38 devices across 1 policy." |

</div>

## The constraint

<div className="ts-steps">

1. Turning on decryption lets Cloud Secure Edge read all encrypted traffic that one policy covers, not just the AI prompts.
2. Making it too easy to turn on would introduce employee privacy issues and apply the setting too broadly.

</div>

## The outcome

The constraint pointed to a better home for the switch. The second prototype puts the decryption switch inside each Internet Threat Protection policy. Decryption is turned on one policy at a time, and each policy applies to specific user roles. So the policy is where an admin can see exactly whose traffic they're about to decrypt.

![The second prototype. An Internet Threat Protection policy has a TLS decryption tab with a decryption switch, a list of the features that use decryption, and a list of categories that are never decrypted.](/img/content-design/ai-prompt-itp-policy.webp)

The decryption tab also has two lists.

- **Used by** names the features that depend on this policy's decryption, including AI prompt visibility. An admin who's thinking about turning decryption off can see that prompt logging would stop for the roles that this policy covers.
- **Don't decrypt** names the website categories that always stay encrypted, such as financial services and health. Admins can protect employee privacy in the same place where they turn decryption on.

Both designs are prototypes. The product team chose the second direction for the roadmap. Until it ships, the docs cover both settings in one procedure, so admins turn on decryption in the right policy before they turn on logging.
