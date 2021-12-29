---
title: Privacy and security tips
sidebar_label: Privacy tips
---

### Metadata

Be mindful of metadata when sharing various files. For example, your photos may
contain geo-location, camera model; your office files may contain names of your
collaborators' names etc. If you are on Windows, you can open the file
properties, see the metadata and even remove them.

![file properties in Windows](/img/metadata-removal-1.png)

![remove metadata](/img/metadata-removal-2.png)

There is a cross-platform exifdata removal tool particularly for images -
<https://github.com/exiftool/exiftool>. If you are on macOS, you can install it
using homebrew.


### File integrity checks

When you download various installers, it is good idea to verify its SHASUM. On
Linux and macOS:
```bash
shasum -a 512 installer.ext
```

On Windows:
```powershell
CertUtil -hashfile installer.exe SHA512
```


### Redact sensitive information

Use professional tools to redact documents and images to hide sensitive
information. Adobe Acrobat Pro has redact tool to remove text and other data
from PDF files.


### Encryption

Use full disc encryption for your computer/laptop hard drives. Mac FileVault,
Windows BitLocker, and Linux LUKS are good options. You can also use full disc
encryption tools like VeraCrypt. When uploading sensitive information to popular
cloud storage providers (Dropbox, OneDrive, Google Drive all allow files to be
reviewed by certain employees and law enforcement officers), encrypt using
AES-256, or PGP encryption. You can have a look at [Cryptomator](
https://cryptomator.org).


### VPN

When you use a VPN, your traffic is visible to your VPN provider, it is
important whom you can trust. If you are on a public WiFi, it is always a good
idea to use a trustable VPN service.
