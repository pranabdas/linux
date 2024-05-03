#!/bin/bash
# disable echo
stty -echo
printf "Password: "
read passwd
# enable echo
stty echo
printf "\n"

printf "Salt: "
read salt

printf "SHA256SUM: "
read sha_ref


sha_out=$(echo -n ${passwd}${salt} | sha256sum)
unset passwd

sha_array=($sha_out) # splits by spaces, output has - or filename after shasum
sha=${sha_array[0]}  # first element

if [ "$sha" == "$sha_ref" ]; then
  echo "OK. SHA are matching."
else
  echo "ERROR. SHA do not match."
fi
