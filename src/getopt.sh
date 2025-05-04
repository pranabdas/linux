#!/bin/bash

OPTSTRING=":vh"

while getopts ${OPTSTRING} opt; do
  case ${opt} in
    h)
      echo "Help message."
      ;;
    v)
      echo "Verbose mode."
      ;;
    ?)
      echo "Invalid option: -${OPTARG}."
      exit 1
      ;;
  esac
done
