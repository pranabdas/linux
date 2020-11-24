### PGP Encryption 

First step, check whether you have *gnupg* already installed in your system. If you are on a standard Linux environment, that's likely the case. 
```
which gpg
``` 

If it prints a path, we are good to go. Otherwise, you will see `gpg not found` message. In that case, we need to install. Depending on your OS and package manager choose one of the following or similar command:
```
apt-get install gnupg 
dnf install gnupg 
brew install gnupg
```

Create a new key pair: 
```
gpg --gen-key
```
You must keep the private key to yourself and never share with anyone. The public key you can give to people, so that they can encrypt messages/files with your public key. You will be the only one to decrypt those messages using your private key. Private key is stored on the disc encrypted with a passphrase. If you lose either your private key or the passphrase, you will not be able to decrypt the messages. Therefore, backup your private key securely, also write down the passphrase in a safe place. 

Export your public key: 
```
gpg --export --armor youremail@example.com > mypubkey.asc
```

Import others public keys: 
```
gpg --import pubkey.asc
```

You can use the same command to import your own private keys as well like if you need to move your key to another machine or you have obtained from another place. 
```
gpg --import privatekey.asc
```

List public keys in your keyring: 
```
gpg --list-keys
```

List private keys: 
```
gpg --list-secret-keys
```

Encrypt a file: 
```
gpg --encrypt --recipient Pranab filename.txt
gpg --encrypt --recipient 'Pranab' filename.txt
gpg --encrypt --recipient 'pranab@example.com' --recipient 'Sam' filename.txt
```

It will generate encrypted file named *filename.txt.gpg*. 
If you want armor text, use that flag: 
```
gpg --encrypt --armor --recipient 'pranab@example.com' filename.txt
```
It generates encrypted file named *ilename.txt.asc*. Specify the output file:
```
gpg --output filename.asc --encrypt --armor --recipient 'pranab@example.com' filename.txt
```

Decrypt a file: 
```
gpg --decrypt filename.txt.gpg
gpg filename.txt.gpg
gpg --decrypt filename.txt.gpg > filename-copy.txt
```
If you do not provide an output file name, it will print decrypted text in the terminal. If it is a binary file, you should provide an output file, possibly with correct file extension. 

Edit a key: 
```
gpg --edit-key 'Pranab Das'
trust 
quit
```

Set the time a cache entry is valid to n seconds. The default is 600 seconds.
```
gpg --default-cache-ttl n
```

You can download anyone's protonmail public key by replacing the email address (username) in the last part and visiting the URL: 
```
https://api.protonmail.ch/pks/lookup?op=get&search=username@protonmail.com
```

You can use PGP to perform symmetric encryption (AES-256 default) as well. Encrypt a file using passphrase: 
```
gpg -c file.txt
```

If you want armor text:
```
gpg -c --armor file.txt
```

Decryption:
```
gpg -d file.txt.gpg > file-copy.txt
```

#### Using PGP encryption with VIM editor

Install this plugin [https://github.com/jamessan/vim-gnupg](https://github.com/jamessan/vim-gnupg){:tartge='_blank'}

I experienced a bug: sometimes two characters of second line is missing or hidden. To resolve this issue, add this to your `.vimrc` file: 
```
autocmd User GnuPG call timer_start(1, 'FixRedraw', {})
func FixRedraw(timer)
        redraw!
endfunc
```
You may prefer to have following options. Just add to your `.vimrc`: 
```
let g:GPGPreferArmor=1
let g:GPGDefaultRecipients=["default@example.com"]
```

Read more: 

- [https://protonmail.com/blog/what-is-pgp-encryption/](https://protonmail.com/blog/what-is-pgp-encryption/){:target="_blank"} 
- [https://www.gnupg.org/gph/en/manual.html](https://www.gnupg.org/gph/en/manual.html){:target="_blank"} 
- [https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/](https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/){:target="_blank"} 
