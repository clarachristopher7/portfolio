---
sidebar_position: 6
---

# Automations

Two projects that use AI-assisted analysis to keep documentation in step with the product.

- **[PR-to-docs impact evaluator](./docs-engineering/pr-evaluator-case-study.mdx):** a scheduled CI job that compares recent merges against the documentation and reports which pages look out of date.
- **[Staleness auditor](./docs-engineering/staleness-auditor-case-study.mdx):** sweeps the whole docs site against the current console UI and returns a maintenance backlog ordered by drift and impact.

Neither one edits a page or files a ticket. Both produce a list for someone to work through.
