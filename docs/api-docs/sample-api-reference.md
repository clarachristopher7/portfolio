---
sidebar_position: 1
---

# [Sample title, e.g. "Policies API Reference"]

> **Why this one:** Pairs a reference doc with a runnable code sample — meant to show that the sample actually works, not just that it reads well.

## Endpoint

`POST /v1/policies`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | ... |
| `rules` | array | yes | ... |

## Example request

```bash
curl -X POST https://api.example.com/v1/policies \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "example-policy", "rules": []}'
```

## Tested code sample

*(Replace with a real, runnable sample — ideally one you've actually executed against a sandbox/mock API. Note in one line how/where you tested it, e.g. "Verified against a local mock server; see /examples in the linked repo.")*

```python
import requests

response = requests.post(
    "https://api.example.com/v1/policies",
    headers={"Authorization": "Bearer TOKEN"},
    json={"name": "example-policy", "rules": []},
)
print(response.status_code, response.json())
```
