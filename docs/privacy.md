---
title: Privacy and security tips
sidebar_label: Privacy tips
---

Delete unnecessary accounts to reduce your online footprints. Setup
two-factor-authentication wherever possible. Use complex and long passwords, and
use a password manager (such as Bitwarden) or secure note (such as Standard
Notes) to write down your passwords. Use [specialized tools](
https://bitwarden.com/password-generator/) to create complex passwords or
passphrases; your password should look like: `LeIH}gZ9We#Z5X` or even more
random and longer.

You can also use `openssl` or `gpg` to generate random passwords:
```bash
$ openssl rand -base64 30
C4/uLe3fJwhyatLO0yuLX2oMQZ5scnvWXHxFrjmi
```

```bash
$ gpg --gen-random -a 0 90 | fold -w 40
0cC0ba287A5EE+ctd1lQAGWKXZIcZhZXbe+47/bu
eCpRDZRhQrzsaQS5Y0vVPpLAXAuNgksb3J8Xd2kF
OwJzQBhgP6l+yy1V1qoa1L/VJcpNYQidhfAKkKOu
```

**Keep your devices and apps up to date:** One of the best thing you can do to
keep your devices safe is keeping them up to date. Go to settings, and install
all available operating system and app updates.

### Metadata

Be mindful of metadata when sharing various files. For example, your photos may
contain geo-location, camera (phone) model; your office files may contain names
of your collaborators. If you are on Windows, you can open the file properties
from the right-click context menu, see the metadata and remove them.

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


### Encryption for local and remote files

Use full disc encryption for your computer/laptop hard drives. Mac FileVault,
Windows BitLocker, and Linux LUKS are good options. You can also use full disc
encryption tools like VeraCrypt. When uploading sensitive information to popular
cloud storage providers (Dropbox, OneDrive, Google Drive all allow files to be
reviewed by certain employees and subjected to law enforcement requests),
encrypt using AES-256, or PGP encryption. You can have a look at [Cryptomator](
https://cryptomator.org) for encrypting your files before uploading to any
cloud. Create regular backups of your data, always encrypt locally before
backing up to a cloud service.


### VPN

When you use a VPN, your traffic is visible to your VPN provider, it is
important whom you can trust. If you are on a public WiFi, it is always a good
idea to use a trustable VPN service. I believe ProtonVPN is a good option.
Today's internet is full of trackers, using a VPN will help you hide your real
IP address. You can also use <https://www.startpage.com> along with its
anonymous view for the same purpose. TOR is another option, however many popular
websites may not function optimally via TOR.


### Email

Use privacy friendly email services such as ProtonMail. However, note that
ProtonMail is private but not anonymous; they might share various metadata (not
your email content and attachments) with law enforcement agencies. If you are
comfortable with technical inconveniences, you should setup [PGP encryption](
https://emailselfdefense.fsf.org/). If possible, communicate less via email and
use services like Signal (enable disappearing messages). Email providers collect
more metadata than Signal.


### Browser and search engines

Use privacy respecting web browsers like Mozilla Firefox or Tor, and search
engines like <https://www.startpage.com> or duckduckgo. Clear your browsing
history and cookies regularly or set to clear when you quit browser.


### Resources

- [macOS Security and Privacy Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide)
