---
hide_table_of_contents: true
sidebar_position: 6
---

# Keeping the docs accurate

<img className="hero-art hero-art--side" src={require('@site/static/img/drawings/hand-watch.jpg').default} alt="Pencil drawing of a hand resting on a table, wearing a watch, by Clara Christopher" />

<p className="hub-sub">Docs drift when the product version updates. I built two tools that catch it, one for code changes and one for UI console releases. Both tools report what they find, and I decide how to fix it.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Engineers change the product every day, and the admin console ships new versions often. Nothing in the release process tells the docs team when a page stops matching the product. Usually, a customer tells us.</p>
</div>

## The problem

<div className="lanes">
  <div className="lane">
    <div className="chain">
      <div className="arch-node"><b>The product changes</b><span>A code change or a new console version</span></div>
      <div className="arch-node arch-node--old"><b>A docs page still describes the old behavior</b></div>
      <div className="arch-node arch-node--old"><b>A customer finds the mismatch first</b></div>
    </div>
  </div>
</div>

Could someone read every change by hand? In theory, sure. In practice, most changes never touch the docs, and the ones that do hide among them.

## The approach

Building the tools was the easy part. The real work was deciding what they should look for, and what they should never do.

<div className="ts-steps">

1. **Only report what customers can use.** A finished change isn't always live, and docs written too early describe features that customers can't use yet. So the evaluator checks the preview environment, and reports a change only once it's live there.
2. **Read the code where features land first.** My first version read the testing copy of the code, and it caught one of the nine changes in a release. New features reach the main development code first, so that's what it reads now.
3. **Rank instead of list.** A console release can touch dozens of pages at once. The auditor ranks them by impact, so a small team fixes the biggest gaps first.
4. **Never edit the docs.** A tool can spot a mismatch. A writer knows whether it matters to the reader, so each tool writes a report and stops there.

</div>

![The evaluator's report. Callouts point to the count of changes that are live in preview, the docs pages that each change probably affects, and the column where a writer marks each item.](/img/automations/impact-report-annotated.webp)

<p className="shot-cap">For code changes. The evaluator lists live changes and the pages each one probably affects. The changes are examples.</p>

![The auditor's backlog. Callouts point to the console version the docs were checked against, the column that says what no longer matches, and the impact ranking.](/img/automations/staleness-backlog-annotated.webp)

<p className="shot-cap">For console releases. The auditor ranks the pages that no longer match the console. The pages are examples.</p>

## The constraint

I couldn't ask engineers to do anything extra, like flag which changes affect the docs. So the tools had to find those changes on their own, by reading the code changes and each new console release.

## The outcome

Now every code change and console release comes with a short list of pages to check, biggest gaps first. We find the mismatches before customers do.
