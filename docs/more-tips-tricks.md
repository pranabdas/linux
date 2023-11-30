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

### Store sensitive variables in Gnome keyring

Install gnome keyring (on Debian/Ubuntu):

```bash
sudo apt update
sudo apt install gnome-keyring libsecret-tools dbus-x11
```

Store new secret:

```bash
secret-tool store --label=<label> <attribute> <value>
secret-tool store --label="auth" "GH_PAT" "TOKEN"
```

This will prompt (requires graphical/x-window system) to enter secret. Retrieve
secrets:

```bash
sudo secret-tool lookup "GH_PAT" "TOKEN"
```

Export ENV variables via `.zshrc` or `.bashrc`:

```bash
export GH_PAT_TOKEN="$(secret-tool lookup 'GH_PAT' 'TOKEN')"
```

Find more info [here](
https://bitwarden.com/blog/how-to-securely-store-your-secrets-manager-access-tokens-with-bash-scripting/).
