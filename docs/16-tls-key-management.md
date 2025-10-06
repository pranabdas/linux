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

## Setup root CA

A root CA model can better protect the integrity of public key infrastructure.
Root CA is not usually used to sign server or client certificates, instead it is
used to sign one or more intermediary certificates to grant them power to sign
other certificates. In the event a CA Intermediary private key is compromised,
the CA Intermediary can be added to a certificate revocation list and all of the
certificates that are signed by the Intermediary are automatically invalidated.

1. Create a directory (it must be restricted location) to store all of the
CA-related data:
```bash
mkdir /root/ca && cd $_
```

2. Create directories to contain CA certificates, CA database content,
Certificate Revocation List, all newly issued certificates, and your private
keys:
```bash
mkdir certs db crl newcerts private
```

3. Protect your private keys to ensure that access to the directory where these
are stored is limited to the root user:
```bash
chmod 700 private
```

4. Create the files that will be used for your CA database. The `index.txt` and
serial files act as a kind of flat file database to keep track of signed
certificates.
```bash
touch db/index.txt
openssl rand -hex 16  > db/serial
echo 1001 | tee  db/crlnumber
```

5. Create config file (`/root/ca/ca-root.conf`):
```bash
[default]
name                    = root-ca
domain_suffix           = example.com
aia_url                 = http://$name.$domain_suffix/$name.crt
crl_url                 = http://$name.$domain_suffix/$name.crl
ocsp_url                = http://ocsp.$name.$domain_suffix:9080
default_ca              = ca_default
name_opt                = utf8,esc_ctrl,multiline,lname,align

[ca_dn]
countryName             = "AU"
organizationName        = "Example Org"
commonName              = "Root CA"

[ca_default]
home                    = .
database                = $home/db/index.txt
serial                  = $home/db/serial
crlnumber               = $home/db/crlnumber
certificate             = $home/$name.crt
private_key             = $home/private/$name.key
RANDFILE                = $home/private/random
new_certs_dir           = $home/certs
unique_subject          = no
copy_extensions         = none
default_days            = 3650
default_crl_days        = 30
default_md              = sha256
policy                  = policy_strict

[policy_strict]
# The root CA should only sign intermediary certificates that match.
# See the POLICY FORMAT section of `man ca`.
countryName             = match
stateOrProvinceName     = optional
organizationName        = match
organizationalUnitName  = optional
commonName              = supplied
emailAddress            = optional

[policy_loose]
# Allow the intermediary CA to sign a more diverse range of certificates.
# See the POLICY FORMAT section of the `ca` manual page.
countryName             = optional
stateOrProvinceName     = optional
localityName            = optional
organizationName        = optional
organizationalUnitName  = optional
commonName              = supplied
emailAddress            = optional

[req]
# Standard Req options
default_bits            = 4096
encrypt_key             = yes
default_md              = sha256
utf8                    = yes
string_mask             = utf8only
prompt                  = no
distinguished_name      = ca_dn
req_extensions          = ca_ext

[ca_ext]
# Extensions for a the CA root (`man x509v3_config`).
basicConstraints        = critical,CA:true
keyUsage                = critical,keyCertSign,cRLSign
subjectKeyIdentifier    = hash

[intermediary_ext]
# Extensions for an intermediary CA.
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer
basicConstraints = critical, CA:true, pathlen:0
keyUsage = critical, digitalSignature, cRLSign, keyCertSign

[server_ext]
# Extensions for server certificates.
basicConstraints = CA:FALSE
nsCertType = server
nsComment = "OpenSSL Generated Server Certificate"
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer:always
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth

[client_ext]
# Extensions for client certificates.
basicConstraints = CA:FALSE
nsCertType = client, email
nsComment = "OpenSSL Generated Client Certificate"
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer
keyUsage = critical, nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = clientAuth, emailProtection

[crl_ext]
# Extension for CRLs.
authorityKeyIdentifier=keyid:always

[ocsp]
# Extension for OCSP signing certificates.
basicConstraints = CA:FALSE
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, OCSPSigning
```

6. Create and Verify the CA Root Key Pair. This is the most valuable key in the
entire infrastructure, ensure that you use a lengthy and suitable passphrase to
protect it.
```bash
openssl req -new -config ca-root.conf -out root-ca.csr -keyout private/root-ca.key
```

7. Create a self-signed certificate by using the CSR and the `ca-root.conf`
file. You will be prompted for your private key passphrase to continue.
```bash
openssl ca -selfsign -config ca-root.conf -in root-ca.csr -out root-ca.crt -extensions ca_ext
```
You can view the db/index.txt file to see the CA root certificate entry:
```bash
cat db/index.txt

V   291026122304Z        8F75111A8E33B2D109A8BF079C67C83E  unknown /C=AU/O=Example Org/CN=Root CA
```
- The values that are displayed on each line within the database index include:
- Status (V for valid, R for revoked, E for expired).
- Expiry date in YYMMDDHHMMSSZ format.
- Revocation date or empty if not revoked (in this example output, the field is empty).
- Hexadecimal serial number.
- File location or unknown, if not known.
- Distinguished name.

8. Next step is to create an intermediary CA that will be used to create all of
your server and client certificates. Create directory structure:
```bash
mkdir /root/ca-intermediary
cd /root/ca-intermediary/
mkdir certs db crl newcerts private
chmod 700 private
touch db/index.txt
openssl rand -hex 16  > db/serial
echo 1001 | tee  db/crlnumber
```

9. Intermediary config (`intermediary.conf`):
```bash
[default]
name                    = sub-ca

domain_suffix           = example.com
aia_url                 = http://$name.$domain_suffix/$name.crt
crl_url                 = http://$name.$domain_suffix/$name.crl
ocsp_url                = http://ocsp.$name.$domain_suffix:9080
default_ca              = ca_default
name_opt                = utf8,esc_ctrl,multiline,lname,align

[ca_dn]
countryName             = "AU"
organizationName        = "Example Org"
commonName              = "Intermediary CA"

[ca_default]
home                    = .
database                = $home/db/index.txt
serial                  = $home/db/serial
crlnumber               = $home/db/crlnumber
certificate             = $home/$name.crt
private_key             = $home/private/$name.key
RANDFILE                = $home/private/random
new_certs_dir           = $home/certs
unique_subject          = no
copy_extensions         = none
default_days            = 3650
default_crl_days        = 30
default_md              = sha256
policy                  = policy_strict

[policy_strict]
# The root CA should only sign intermediary certificates that match.
# See the POLICY FORMAT section of `man ca`.
countryName             = match
stateOrProvinceName     = optional
organizationName        = match
organizationalUnitName  = optional
commonName              = supplied
emailAddress            = optional

[policy_loose]
# Allow the intermediary CA to sign a more diverse range of certificates.
# See the POLICY FORMAT section of the `ca` manual page.
countryName             = optional
stateOrProvinceName     = optional
localityName            = optional
organizationName        = optional
organizationalUnitName  = optional
commonName              = supplied
emailAddress            = optional

[req]
# Standard Req options
default_bits            = 4096
encrypt_key             = yes
default_md              = sha256
utf8                    = yes
string_mask             = utf8only
prompt                  = no
distinguished_name      = ca_dn
req_extensions          = intermediary_ext

[ca_ext]
# Extensions for a the CA root (`man x509v3_config`).
basicConstraints        = critical,CA:true
keyUsage                = critical,keyCertSign,cRLSign
subjectKeyIdentifier    = hash

[intermediary_ext]
# Extensions for an intermediary CA.
subjectKeyIdentifier = hash
# authorityKeyIdentifier = keyid:always,issuer
basicConstraints = critical, CA:true, pathlen:0
keyUsage = critical, digitalSignature, cRLSign, keyCertSign

[server_ext]
# Extensions for server certificates.
basicConstraints = CA:FALSE
nsCertType = server
nsComment = "OpenSSL Generated Server Certificate"
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer:always
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth

[client_ext]
# Extensions for client certificates.
basicConstraints = CA:FALSE
nsCertType = client, email
nsComment = "OpenSSL Generated Client Certificate"
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer
keyUsage = critical, nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = clientAuth, emailProtection

[crl_ext]
# Extension for CRLs.
authorityKeyIdentifier=keyid:always

[ocsp]
# Extension for OCSP signing certificates.
basicConstraints = CA:FALSE
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, OCSPSigning
```

10. Create a CSR for the intermediary certificate:
```bash
openssl req -new -config intermediary.conf -out sub-ca.csr -keyout private/sub-ca.key
```

This certificate is also a signing certificate, so it is important to protect it
with a passphrase to help prevent its unauthorized use and maintain the security
of your infrastructure. Enter the passphrase when prompted.

11. Create a signed certificate for the intermediary CA. Copy the sub-ca.csr
that you generated in the previous step to the /root/ca directory on the system
where your root CA is hosted.
```bash
openssl ca -config ca-root.conf -in sub-ca.csr -out newcerts/sub-ca.crt \
-extensions intermediary_ext
```

12. Create a certificate chain file. Because no systems are aware of the root CA
certificate, you should create a certificate chain that includes the public
certificate for the root CA with the newly created intermediary CA certificate.
In this way, hosts only need a copy of the chained certificate to validate any
certificates that are issued by the intermediary CA. To create the certificate
chain, simply join the two public certificates by running the following command
on the root CA host:
```bash
cat root-ca.crt newcerts/sub-ca.crt > newcerts/chained-sub-ca.crt
chmod 444 newcerts/chained-sub-ca.crt
```

Copy the `newcerts/sub-ca.crt` and `newcerts/chained-sub-ca.crt` certificate
back to the `/root/ca-intermediary/` directory on the intermediary CA host. You
can now use this certificate to process server and client CSRs and to generate
CRLs.

When you return a signed certificate for any given CSR, include the
`chained-sub-ca.crt` certificate so that it can be installed on the host where
the certificate will be used and distributed to any client that needs to
validate the signed certificate.

13. Process CSRs and Sign Certificates
```bash
openssl ca -config intermediary.conf -extensions server_ext -days 375 \
-in www.example.com.csr -out newcerts/www.example.com.crt
```

## References
- [Oracle manual: Managing Certificates and Public Key Infrastructure](https://pranabdas.github.io/drive/documents/linux-manuals/Oracle-linux--managing-TLS-certificates.pdf)
- [RedHat manual: Securing networks](https://pranabdas.github.io/drive/documents/linux-manuals/red_hat_securing_networks.pdf)
- [Securing MongoDB Cluster with TLS](https://pranabdas.github.io/drive/documents/technical-articles/Securing-MongoDB-Cluster-with-TLS.pdf)
