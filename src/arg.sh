#!/bin/bash

# Usage: bash arg.sh <time of the day> <your name>

case $1 in
  morning)
    echo "Good Morning, $2!"
    ;;
  evening)
    echo "Good Evening, $2!"
    ;;
  *)
    echo "Hello, $2!"
    ;;
esac
