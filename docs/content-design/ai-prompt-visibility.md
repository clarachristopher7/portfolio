---
hide_table_of_contents: true
sidebar_position: 3
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts that employees send to AI tools. In the product manager's prototype, you could turn logging on, walk away, and never capture a thing. The step that made it work lived somewhere else entirely.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a service that decides whether an employee's device can connect to company apps and websites. It can also log the prompts that employees send to AI tools like ChatGPT. And people paste all sorts of things into those tools (customer records, source code, internal documents). Once that information leaves the company, it's gone. The log shows admins what's being shared, so they can catch leaks and set sensible rules for AI.</p>
  <p>There's a catch. Prompts travel over encrypted connections, and Cloud Secure Edge can only read them if it's allowed to decrypt that traffic. Admins turn on decryption in an Internet Threat Protection policy, in a completely different part of the admin console. Each policy applies to specific user roles, so decryption (and prompt logging with it) covers only the employees in those roles.</p>
</div>

## The problem

![The product manager's prototype of the logging screen. Callout 1 points to the logging switch, which shows as on even though nothing is logged. Callout 2 points to the close button on a warning about unfinished setup. Callout 3 points to an empty log that says "No data yet".](/img/content-design/ai-prompt-before-annotated.webp)

<p className="shot-cap">The product manager's prototype.</p>

Three things go wrong here.

1. **Setup can be skipped.** An admin can toggle on the switch before decryption is set up.
2. **The warning can be dismissed.** It names the missing step, but one click closes it, and the admin can leave with setup unfinished.
3. **An empty log misleads.** An admin comes back a month later, finds an empty log, and concludes nobody's using AI. They'd be wrong. Nothing was ever logged.

## The approach

My first instinct was to put everything in one place. The first prototype moved the decryption setting onto the logging screen, right above the logging switch. Admins could finish setup without leaving, and the warning had nothing left to warn about.

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

That constraint changed my mind about where the switch belongs. Decryption isn't really a logging setting. It's a policy setting, turned on one policy at a time, and each policy applies to specific user roles. So the second prototype puts the switch inside each Internet Threat Protection policy, where an admin can see exactly whose traffic they're about to decrypt.

![The second prototype. An Internet Threat Protection policy has a TLS decryption tab with a decryption switch, a list of the features that use decryption, and a list of categories that are never decrypted.](/img/content-design/ai-prompt-itp-policy.webp)

The decryption tab also has two lists.

- **Used by** names the features that depend on this policy's decryption, including AI prompt visibility. An admin who's thinking about turning decryption off can see that prompt logging would stop for the roles that this policy covers.
- **Don't decrypt** names the website categories that always stay encrypted, such as financial services and health. Admins can protect employee privacy in the same place where they turn decryption on.

Both designs are still prototypes. The product team picked the second direction for the roadmap. Until it ships, the docs walk admins through both settings in one procedure, decryption first, so nobody ends up staring at an empty log.

### Then the roadmap grew

AI prompt visibility isn't the only feature that needs TLS decryption. Require approved AI apps needs it too, and so does risk-based URL filtering, which isn't an AI feature at all. The team also wanted one tab for every AI feature in a policy.

That brought the original problem back. Put the AI features in their own tab, and they're separated from decryption again. Put them under decryption, and URL filtering has nowhere to go.

So I proposed showing the dependency through each feature's state, instead of through where the feature lives. Decryption keeps one home, its own tab. The AI tab is organized around what admins want to do, and every feature that needs decryption says so.

![A prototype of the AI tab in an Internet Threat Protection policy, with TLS decryption turned off. Callouts point to a banner that says decryption is off, a paused feature that says why it stopped, and a feature that says it can't turn on until decryption is on.](/img/content-design/ai-tab-annotated.webp)

<p className="shot-cap">A prototype of the AI tab with decryption turned off. Two features need it, and one doesn't.</p>

Each feature that needs decryption has three states. It's on and working, it can't turn on yet, or it's paused because someone turned decryption off. That paused state fixes the empty-log problem for every feature, not just this one.

Turning on decryption from the AI tab is never a silent toggle. It opens a confirmation that says exactly what the admin is agreeing to.

![A confirmation dialog titled "Turn on TLS decryption for this policy?". Callouts point to the line that says it's the same setting as the TLS decryption tab, whose traffic will be decrypted, the categories that are never decrypted, and the features that use decryption.](/img/content-design/ai-tab-confirm-annotated.webp)

<p className="shot-cap">The confirmation, when an admin turns on decryption from the AI tab.</p>
