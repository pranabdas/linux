#!/bin/bash

# Usage: add x y
# where x and y are integer numbers
add() {
  x="$1"
  y="$2"

  result=$( expr $x + $y )

  echo "$x + $y = $result"
}

add 2 5
