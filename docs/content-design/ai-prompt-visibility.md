---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts employees send to AI tools. The switch looked like it worked, but nothing got captured until you changed a second setting on a different screen.</p>

<dl className="ctx">
  <div><dt>The product</dt><dd>Cloud Secure Edge, a SonicWall service that checks each time an employee’s device tries to reach a company app or website, and decides whether to let it through.</dd></div>
  <div><dt>Who uses it</dt><dd>IT and security admins.</dd></div>
  <div><dt>What they’re doing</dt><dd>Turning on prompt logging to see what employees share with AI tools like ChatGPT. Those prompts travel over encrypted connections, so the service can only read them if it’s allowed to decrypt that traffic. That permission lives in the organization’s web filtering policy, on a separate screen.</dd></div>
  <div><dt>My part</dt><dd>The product designer and I made the case for having admins finish setup before logging gets switched on. I proposed putting the decryption setting right in that flow.</dd></div>
</dl>

## Before

![The screen as it shipped: the AI logging switch is on, a warning below it says a security setting still has to be set up elsewhere, and the log reads "No data yet".](/img/content-design/ai-prompt-before.png)

<p className="shot-cap">As shipped, you could switch logging on right away. A warning underneath pointed you to the decryption setting on another screen.</p>

## The problem

It was easy to dismiss the warning and move on, thinking logging was on. Then the log stayed empty. An empty log looks exactly like a company that rarely uses AI tools, so there was no reason to go back and check.

## The constraint

[Add: what you were working with.]

## What I tried

[Add: what you ruled out.]

## After

![The proposed screen: the missing security setting sits right above the AI logging switch, with a line confirming how many devices are being logged.](/img/content-design/ai-prompt-after.png)

In the proposal, the decryption setting sits right above the logging switch, listed for each web filtering policy along with how many devices it covers. You turn on decryption where you want prompts captured, then switch logging on, and a line confirms how many devices you’re now logging. This design was proposed and hasn’t been built.

## The outcome

[Add a result.]
