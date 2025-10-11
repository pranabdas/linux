#!/bin/bash

OPTSTRING=":x:y:"

while getopts ${OPTSTRING} opt; do
  case ${opt} in
    x)
      echo "Option -x provided, Argument: ${OPTARG}"
      ;;
    y)
      echo "Option -y provided, Argument: ${OPTARG}"
      ;;
    :)
      echo "Option -${OPTARG} requires an argument."
      exit 1
      ;;
    ?)
      echo "Invalid option: -${OPTARG}."
      exit 1
      ;;
  esac
done
