---
hide_table_of_contents: true
sidebar_position: 2
---

# AI prompt visibility

<p className="hub-sub">Admins can log the prompts employees send to AI tools. Turning logging on looked like it worked, but nothing was captured until an admin changed a second setting on another screen.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge is a SonicWall service that decides whether an employee’s device can connect to a company’s apps and websites. It can also keep a log of the prompts employees send to AI tools like ChatGPT, so admins can see what’s being shared.</p>
  <p>There’s a catch: those prompts travel over encrypted connections. Cloud Secure Edge can only read them if it’s allowed to decrypt that traffic, and that permission is set in a web filtering policy on a different screen.</p>
  <p>The product designer and I argued that admins should finish this setup before turning logging on. I proposed bringing the decryption setting into the same flow.</p>
</div>

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

In the proposal, the decryption setting appears right above the logging switch. Each web filtering policy is listed with the number of devices it covers and its own decryption switch. You turn on decryption for the policies you want to capture prompts from, then turn logging on, and a line confirms how many devices are being logged. This design was proposed and hasn’t been built.

## The outcome

[Add a result.]
