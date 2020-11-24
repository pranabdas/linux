### Shell scripting 

Choose a unique name for the scripting file. Try following commands to see if an executable with the same name exists: 
```
type myscript
type -a myscript
which myscript
```

Then we need to store our executable in the system `PATH`. Check the existing paths: 
```
echo $PATH
```

If we want to include a new path to our `$PATH` variable, we can include following in our `.bashrc`: 
```
PATH=$PATH:/new/path
``` 
or, 
```
export PATH="/new/path:$PATH"
```
