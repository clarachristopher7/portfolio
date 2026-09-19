---
sidebar_position: 6
---

# Automations

Projects where I used AI-assisted analysis and tooling to keep docs current and robust.

- **[PR-to-docs impact evaluator](./docs-engineering/pr-evaluator-case-study.mdx):** queries the GitLab API during CI/CD cycles to cross-reference engineering changes against existing documentation, flagging drift before it reaches customers rather than after.
- **[Staleness auditor](./docs-engineering/staleness-auditor-case-study.mdx):** cross-references the docs site against new console UI versions and generates a prioritized maintenance backlog, so effort goes to the highest-impact gaps first.

Both treat documentation as infrastructure: the goal is a system that catches drift on its own, not a doc set that was correct once.
