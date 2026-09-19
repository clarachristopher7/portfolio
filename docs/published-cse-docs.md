---
sidebar_position: 2
---

# Published docs

Live pages I write and maintain on the [SonicWall Cloud Secure Edge documentation site](https://cse-docs.sonicwall.com). These are public and current — no login, and I still own them. Three different kinds of writing, chosen to show range rather than volume.

## Internet Threat Protection (ITP) Architecture

**[cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture](https://cse-docs.sonicwall.com/docs/securing-internet-traffic/dns-architecture/)** · architecture

Explains how ITP's pieces fit together: the cloud-hosted `swg agent` proxy with distributed points of presence, the DNS proxy running locally on the user's device, and the third-party threat intelligence feed. Traces the full request path — a device rewrites its name servers to point at CSE, sends its unique identifier with each DNS request, and the name servers match that identifier to the governing ITP policy before allowing or blocking.

> **Why this one:** Distributed enforcement is hard to hold in your head from prose alone. This page names each component, gives it one job in a legend table, then walks the hop-by-hop path so an admin can reason about *where* a block actually happens.

## Forward CSE Events to the ELK Stack

**[cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack](https://cse-docs.sonicwall.com/docs/visibility-logging/events/elk-stack/)** · integration

End-to-end procedure for piping CSE security and policy events into Elasticsearch, Logstash, and Kibana through Filebeat. Covers creating a read-only scoped API key in the Command Center, storing the secret in the Filebeat keystore rather than in plaintext config, the `httpjson` input configuration with its auth transform and pagination cursor, and validating that events actually surface in Kibana.

> **Why this one:** Procedural writing against a real toolchain — stated prerequisites, sequenced steps, copyable CLI and YAML, and the regional endpoint caveat that would otherwise generate a support ticket.

## Trust Scoring

**[cse-docs.sonicwall.com/docs/trust-scoring](https://cse-docs.sonicwall.com/docs/trust-scoring/)** · concepts

Introduces how CSE continuously evaluates device posture. Signals from built-in Trust Factors and configured Trust Integrations are weighed by each factor's Trust Effect, measured against the conditions an admin sets in a Trust Profile, and resolved into a single Trust Level that access policies consume to allow or deny a device.

> **Why this one:** Four terms that sound alike — Trust Factor, Trust Effect, Trust Profile, Trust Level — have to stay distinct for the model to make sense. This page defines each once, uses them consistently, and covers non-obvious behavior like a factor that doesn't apply to a device's platform being skipped rather than failed.
