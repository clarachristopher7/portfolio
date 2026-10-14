---
hide_table_of_contents: true
sidebar_position: 6
---

# Keeping the docs accurate

<p className="hub-sub">Docs drift when the product version updates. I built two tools that catch it, one for code changes and one for UI console releases. Both tools report what they find, and I decide how to fix it.</p>

<div className="ctx-prose">
  <p className="ctx-label">Background</p>
  <p>Cloud Secure Edge engineers change the product every day, and the admin console ships new versions often. Nothing in the release process tells the docs team when a page stops matching the product.</p>
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

Reading every change by hand isn't realistic. Most changes never affect the docs, and the ones that do are hard to spot.

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

<div className="ts-steps">

1. I couldn't add a step to how engineering releases the product. The tools work only from what already exists, the code changes and the released console.
2. The docs team is small, so each report had to be short enough to finish before the next release.

</div>

## The outcome

Every code change and console release now comes with a short list of pages to check, ranked by impact. Writers find the mismatches before customers do.
