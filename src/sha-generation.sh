#!/bin/bash
# this script calculates sha256sum of a string input

# disable echo
stty -echo
printf "Password: "
read passwd
printf "\n"
printf "Confirm password: "
read passwd_confirm

# enable echo
stty echo
printf "\n"

if [ "$passwd" != "$passwd_confirm" ]; then
  echo "Passwords do not match. Exiting."
  exit 1
fi

unset passwd_confirm

salt=$(openssl rand -hex 32)

# this prevents same hash for same password, as salt is different everytime
sha_out=$(echo -n ${passwd}${salt} | sha256sum)  # notice no newline option
unset passwd

sha_array=($sha_out) # splits by spaces, output has - or filename after shasum
sha=${sha_array[0]}  # first element

printf "\nSalt     : $salt\n"
printf "SHA256SUM: $sha\n"
