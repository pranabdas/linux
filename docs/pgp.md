---
title: PGP Encryption
---

First step, check whether you have *gnupg* already installed in your system. If
you are on a standard Linux environment, that's likely the case.
```bash
gpg --version
```

If it prints version info, we are good to go. Otherwise, you will see some error
message. In that case, we need to install. Depending on your OS and package
manager choose one of the following or similar command:
```bash
# ubuntu / debian
apt install gnupg

# fedora
dnf install gnupg

# macOS
brew install gnupg
```

Create a new key pair:
```bash
gpg --gen-key
```
You must keep the private key to yourself and never share with anyone. The
public key you can give to people, so that they can encrypt messages/files with
your public key. You will be the only one to decrypt those messages using your
private key. Private key is stored on the disc encrypted with a passphrase. If
you lose either your private key or the passphrase, you will not be able to
decrypt the messages. Therefore, backup your private key securely, also write
down the passphrase in a safe place.

Export your public key:
```bash
gpg --export --armor youremail@example.com > mypubkey.asc
```

Import others public keys:
```bash
gpg --import pubkey.asc
```

You can use the same command to import your own private keys as well like if you
need to move your key to another machine or you have obtained from another
place.
```bash
gpg --import privatekey.asc
```

List public keys in your keyring:
```bash
gpg --list-keys
```

List private keys:
```bash
gpg --list-secret-keys
```

Encrypt a file:
```bash
gpg --encrypt --recipient Pranab filename.txt
gpg --encrypt --recipient 'Pranab' filename.txt
gpg --encrypt --recipient 'pranab@example.com' --recipient 'Sam' filename.txt
```

It will generate encrypted file named *filename.txt.gpg*.
If you want armor text, use that flag:
```bash
gpg --encrypt --armor --recipient 'pranab@example.com' filename.txt
```

It generates encrypted file named *filename.txt.asc*. Specify the output file:
```bash
gpg --output filename.asc --encrypt --armor --recipient 'pranab@example.com' filename.txt
```

Decrypt a file:
```bash
gpg --decrypt filename.txt.gpg
gpg filename.txt.gpg
gpg --decrypt filename.txt.gpg > filename-copy.txt
```

If you do not provide an output file name, it will print decrypted text in the
terminal. If it is a binary file, you should provide an output file, possibly
with correct file extension.

Edit a key:
```bash
gpg --edit-key 'Pranab Das'
trust
quit
```

Set the time a cache entry is valid to n seconds. The default is 600 seconds.
```bash
gpg --default-cache-ttl n
```

You can download anyone's protonmail public key by visiting the URL:
```bash
https://api.protonmail.ch/pks/lookup?op=get&search={username}@protonmail.com
```

You can use PGP to perform symmetric encryption as well. Encrypt a file using
passphrase:
```bash
gpg -c file.txt
# with more options
gpg --symmetric \
    --armor \
    --cipher-algo AES256 \
    --output file.enc \
    file.txt
```

By default gpg uses some compression leading to output size less than that of
input for non armor outputs. You can change the compression algorithm and
compression level by `--compress-algo` and `-z` options, respectively. See the
manual for more details.

Decryption:
```bash
gpg -d file.txt.gpg > file-copy.txt
```

## Using PGP encryption with VIM editor

Install this plugin <https://github.com/jamessan/vim-gnupg>

I experienced a bug: sometimes two characters of second line is missing or
hidden. To resolve this issue, add this to your `.vimrc` file:
```vim
autocmd User GnuPG call timer_start(1, 'FixRedraw', {})
func FixRedraw(timer)
        redraw!
endfunc
```

You may prefer to have following options. Just add to your `.vimrc`:
```vim
let g:GPGPreferArmor=1
let g:GPGDefaultRecipients=["default@example.com"]
```

## Resources

- <https://protonmail.com/blog/what-is-pgp-encryption/>
- <https://www.gnupg.org/gph/en/manual.html>
- <https://emailselfdefense.fsf.org/>
- <https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/>
