---
sidebar_position: 1
---

# PR Evaluator

**Problem:** Rapid release cycles meant engineering changes could outpace documentation updates, with no systematic way to catch the gap before it reached customers.

**Approach:**
- Designed and integrated a generative AI workflow automation (built with Claude Code) that scans code repositories during CI/CD cycles
- Queries the GitLab API to cross-reference engineering changes against existing documentation
- Flags misalignment in real time, rather than relying on manual review cycles to catch drift

**Outcome:**
- [Add a concrete result — number of PRs flagged, time saved, adoption by the team, etc.]

**What this demonstrates:** treating documentation as infrastructure — using AI-powered automation to keep docs aligned with rapid release cycles, not just writing the docs themselves.
