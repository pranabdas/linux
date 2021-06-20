---
title: Shell scripting
---

Choose a unique name for the scripting file. Try following commands to see if an
executable with the same name exists:
```bash
type myscript
type -a myscript
which myscript
```

Then we need to store our executable in the system `PATH`. Check the existing
paths:
```bash
echo $PATH
```

If we want to include a new path to our `$PATH` variable, we can include
following in our `.bashrc`:
```bash
PATH=$PATH:/new/path
```

or, issue this every time you restart your terminal
```bash
export PATH="/new/path:$PATH"
```

We can write our script in a file:
```bash title="myscript.sh"
#!/bin/bash
echo "Hello world"
```

Next step is to grant executable permission:
```bash
chmod +x myscript.sh
```

We can execute the script by:
```bash
./myscript.sh
```

We can also run the script by:
```bash
sh myscript.sh

bash myscript.sh
```

:::info

`sh` and `bash` are not exactly the same, and might give slightly different
result in some cases. bash refers to Born Again SHell while sh refers to the
original UNIX shell.

:::

Variables:
```bash
my_var="/home/user/pranab"
my_num=0
my_num=$((my_num + 1))

echo ${my_var}
echo $my_num
```

:::tip

Bash uses capitalized variable names for global variables (e.g., `PATH`, `PWD`).
Perhaps it is a good idea to name local variables with lower case letters to
avoid conflict.

:::

Array:
```bash
my_arr=("one" "two")

# add item
my_arr+=(three)

# length of an array
len=${#my_arr[@]}
```

For loop:
```bash
for i in "${my_arr[@]}"
  do printf "${i}\n"
done
```

Use `seq` to create array with increment:
```bash
$ my_arr2=`seq 0 2 10`; echo $my_arr2
0
2
4
6
8
10
```

If condition:
```bash
# if a file exists
if [ -e ".DS_Store" ] ; then
    rm ".DS_Store"
fi

# if a directory exists
if [ -d "tmpdir" ] ; then
    rm -rf tmpdir
fi
```

**Common file attribute operators:**

Operator | True if
-------- | -------
-a or -e | file exists
-d       | is a directory
-f       | is a regular file (e.g., not a directory)
-s       | not empty
-r/w/x   | have read/write/execute permission

Brace expansion:
```bash
$ echo {1..10}
1 2 3 4 5 6 7 8 9 10
```

```bash
$ echo {2020..2021}-{01..12}
2020-01 2020-02 2020-03 2020-04 2020-05 2020-06 2020-07 2020-08
2020-09 2020-10 2020-11 2020-12 2021-01 2021-02 2021-03 2021-04
2021-05 2021-06 2021-07 2021-08 2021-09 2021-10 2021-11 2021-12
```

A bash script to convert degree Celsius to Fahrenheit:
```bash title="src/deg_f_to_c_conv.sh"
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
```

## Learn more
- *Learning the bash Shell: Unix Shell Programming* by *C. Newham*.
- *Linux Shell Scripting With Bash* by *K. O. Burtch*.
