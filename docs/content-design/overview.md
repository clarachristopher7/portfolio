---
sidebar_position: 0
---

# Content Design

Three samples from SonicWall Cloud Secure Edge, in the order I'd want them read — they make one argument together.

Each of them started as a request for words. In each, the words turned out to be downstream of something structural:

- **[Device Geolocation](./device-geolocation-trust-factor.md)** — a screen that gave the admin every input and never stated the rule they produced, with the outcome printed above the inputs that determine it.
- **[Service Tunnel configuration](./service-tunnel-configuration.md)** — configuration organized along the system's seams rather than the admin's task, so a complete-looking form produced an unusable object.
- **[AI prompt visibility](./ai-prompt-visibility.md)** — an error and a warning doing the work of a control, announcing a dependency instead of resolving it.

The pattern I keep finding: **a message that tells someone to go somewhere else is usually a structural problem wearing a copy costume.** Writing it more clearly produces a better-worded dead end. The useful move is to ask what the message is compensating for, and whether that thing can be moved, reordered, or removed.

This is most of what I think content design is in infrastructure products. The audience is expert, the stakes of a misread are a misconfigured security policy, and the highest-leverage edits are frequently the ones that delete text rather than improve it.
