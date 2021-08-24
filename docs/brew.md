---
title: Homebrew
---

[Homebrew](https://brew.sh) is very handy package manager for macOS (also
available for Linux). Install homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install a package (also called formulae, usually command-line utilities):
```bash
brew install wget
```

Info about a package:
```bash
brew info gnupg
```

Search for a package:
```bash
brew search fftw
```

Install a cask (usually graphical apps, by default placed under macOS
Applications folder):
```bash
brew install --cask firefox
```

List all installed packages:
```bash
brew list
```

Update a specific package:
```bash
brew upgrade wget
```

Update brew and cask:
```bash
brew update
```

Upgrade all installed packages:
```bash
brew upgrade
```

Switch off analytics
```bash
brew analytics off
```

Cleanup (use the flag `--dry-run` to list what will be removed before actually
deleting):
```bash
brew cleanup --prune=all --dry-run
brew cleanup --prune=all
```

Remove dependencies no longer needed:
```bash
brew autoremove --dry-run
brew autoremove
```

Auto fix issues:
```bash
brew doctor
```
