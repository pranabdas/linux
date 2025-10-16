#!/bin/bash
# this reports undefined variables
shopt -s -o nounset

# declare integer variables
declare -i tempF
declare -i tempC

printf "Fahrenheit-Celsius Conversion\n\n"

# read value via prompt
read -p "Enter temperature in Celsius (integer only): " tempC
tempF="9*tempC/5+32"
printf "The Fahrenheit temperature is %d\n" "$tempF"
exit 0
