---
title: Managing public key infrastructure
sidebar_label: Key management
keywords: ["linux", "openssl", "tls"]
---

## Generate keys

Generate 2048 bit RSA key using openssl:

```bash
openssl genrsa -out private.key 2048
```

:::info

Key with larger bit (say, RSA 4096) are more secure but it comes with additional
computing overhead for encryption and decryption.

:::

The key generated in the above command contains both private and the public
keys. Extract the public key:

```bash
openssl rsa -pubout -in private.key
```

We can encrypt the `private.key`:

```bash
openssl genrsa -aes256 -out private.key 2048
```

Convert an encrypted key to a un-encrypted file:

```bash
openssl rsa -in private.key -out unencrypted.key
```

Inspect other details in a private key:

```bash
openssl rsa -text -in private.key
```

## Certificate Signing Request

Create CSR (interactively):

```bash
openssl req -new -key private.key -out domain.example.com.csr
```

Create CSR non-interactively:

```bash
openssl req -new -key private.key -noenc \
  -subj '/CN=domain.example.com/O=Example Ltd/C=SG/L=Singapore' \
  -out domain.example.com.csr
```

Create private key and csr together:

```bash
openssl req -new -noenc \
  -subj '/CN=domain.example.com/O=Example Ltd/C=SG/L=Singapore' \
  -newkey rsa:2048 -keyout private2.key -out domain2.example.com.csr
```

## Self-sign certificates

Self-signed certificates are intended for testing and development purposes only.
Generate a self-signed certificate for root of trust:

```bash
openssl req -x509 -days 365 -noenc \
  -subj '/CN=ROOT/O=ROOT/C=SG/L=Singapore' -key private.key -out ca.crt
```

Use the self-signed root signing certificate to generate a signed certificate
from the certificate request:

```bash
openssl x509 -req -in domain.example.com.csr -days 365 -CA ca.crt \
  -CAkey private.key -CAcreateserial -out domain.example.com.crt
```

Do all the above in a single step:

```bash
openssl req -new -x509 -days 365 -noenc -newkey rsa:2048 -keyout private.key \
  -out public.crt -subj '/CN=domain.example.com/O=Example Ltd/C=SG/L=Singapore'
```
