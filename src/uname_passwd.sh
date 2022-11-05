#!/bin/sh
printf "Username: "
read uname
read -s -p "Password: " passwd; echo
message=`openssl enc -d -aes-256-cbc \
  -salt \
  -pbkdf2 \
  -iter 1000000 \
  -md sha512 \
  -k "${passwd}" \
  -base64 <<< "U2FsdGVkX18Y9d6MT+d8kbrmfsgd1j/vnNlZ5T7LQ6I="`
unset passwd
echo "Username: ${uname}"
echo "MESSAGE: ${message}"
