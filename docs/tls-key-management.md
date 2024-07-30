---
title: Managing public key infrastructure
sidebar_label: TLS Key management
keywords: ["linux", "openssl", "tls"]
---

## Generate keys

Generate 2048 bit RSA key using openssl:

```bash
openssl genrsa -out private.key 2048
```

:::info

Key with higher bit size (say, RSA 4096 bit or even 8192 bit) are more secure
but it comes with additional computing overhead for encryption and decryption.

:::

The key generated in the above command contains both private and the public
keys. Extract the public key:

```bash
openssl rsa -pubout -in private.key
```

We can encrypt the `private.key` with a passphrase during creation instead of
writing in plaintext:

```bash
openssl genrsa -aes256 -out private.key 2048
```

Convert an encrypted key file to a un-encrypted file:

```bash
openssl rsa -in private.key -out unencrypted.key
```

Inspect various details in a private key:

```bash
openssl rsa -text -in private.key
openssl rsa -check -noout -in private.key
```


## Certificate Signing Request

Create CSR (interactively, it will ask for various required and optional
parameters):

```bash
openssl req -new -key private.key -out domain.example.com.csr
```

Create CSR non-interactively:

```bash
openssl req -new -key private.key -noenc \
  -subj '/CN=example.com/O=Example Inc./OU=Engineering/C=US/ST=California/L=San Francisco/emailAddress=email@example.com' \
  -addext "keyUsage = digitalSignature,keyAgreement" \
  -addext "extendedKeyUsage = serverAuth, clientAuth" \
  -out example.com.csr
```

Create private key and csr together:

```bash
openssl req -new -noenc \
  -subj '/CN=domain.example.com/O=Example Ltd/C=SG/L=Singapore' \
  -newkey rsa:2048 -keyout private2.key -out domain2.example.com.csr
```

Check CSR details:

```bash
openssl req -text -noout -verify -in mongo.csr.pem
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


## Use CA to sign

For production usage, we should be using a third-party CA authority. In case of
a own CA implementation, we could use a separate root or intermediatory CA key
and certificate to sign. Better care should be taken when creating a root
certificate, e.g., a larger size key and encrypt the key file.

```bash
openssl genrsa -out ca.key -aes256 8192
```

Generate CA public certificate:

```bash
openssl req -x509 -new -extensions v3_ca -key ca.key -days 365 -out ca.crt \
  -subj '/CN=ca.example.com/O=CA Inc./C=SG/L=Singapore'
```

Sign CSR:

```bash
openssl x509 -req -in domain.example.com.csr -CA ca.crt -CAkey ca.key \
  -days 365 -out domain.example.com.crt
```

Check certificate details:

```bash
openssl x509 -text -noout -in domain.example.com.crt
```

Verify:

```bash
openssl verify -CAfile ca.crt domain.example.com.crt
```


## References
- [Oracle manual: Managing Certificates and Public Key Infrastructure](https://pranabdas.github.io/drive/documents/linux-manuals/Oracle-linux--managing-TLS-certificates.pdf)
- [RedHat manual: Securing networks](https://pranabdas.github.io/drive/documents/linux-manuals/red_hat_securing_networks.pdf)
- [Securing MongoDB Cluster with TLS](https://pranabdas.github.io/drive/documents/technical-articles/Securing-MongoDB-Cluster-with-TLS.pdf)
