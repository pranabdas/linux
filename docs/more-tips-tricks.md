---
title: More tips and tricks
---

### Store ENV variables in macOS keychain

Add item to keychain:

```bash
security add-generic-password -a "$USER" -s 'API_KEY' -w 'xxxxyyyyzzzz'
```

Get secret from keychain:

```bash
security find-generic-password -a "$USER" -s 'API_KEY' -w
```

Automatically export secret variables via `.zshrc` or `.bashrc`:

```bash
export API_KEY=$(security find-generic-password -a "$USER" -s "API_KEY" -w)
```
