### Using VI/VIM editor

VIM is a simple and powerful editor. If you are accessing a remote workstation or cluster where you don't have the option to launch graphical programs, VIM is a great option. 

- Open/Create a `file_name` to read and/or write:
```
vi file_name
```

- Go into `INSERT` mode by (Check in the bottom for `--INSERT--`):
```
[shift] + [I]
```

- Go into `REPLACE` mode (Check in the bottom for `--REPLACE--`):
```
[shift] + [R]
```

- Go into readonly/normal mode:
```
[esc]
```

- To save file, first go into readonly mode (`[esc]`) and then:
```
:w
```

- To exit vim, first go into readonly mode (`[esc]`) and then:
```
:q
```

- You can combine both to save and exit (keyboard shortcut [Shift]+[Z Z]):
```
:wq
```

- Exit without saving (keyboard shortcut [Shift]+[Z Q]):
```
:q!
```

- Search in the file: Type `/` followed by the phrase you are looking for. Press `N` go to next match. You can search backwards using `?` 

- You can customize your vi editor by creating a `~/.vimrc` file and saving your settings there. Like: 

```
syntax on 
set tabstop=4
set ruler
colorscheme darkblue 
set textwidth=80
set cc=81
set autoindent
set spell
hi SpellBad ctermbg=Yellow
hi SpellBad ctermfg=DarkRed
set spellfile=~/.vim/en.utf-8.add 

" Syntax highlight for custom filetypes
au BufRead,BufNewFile *.in set filetype=fortran
au BufRead,BufNewFile *.out set filetype=fortran
au BufRead,BufNewFile matplotlibrc set filetype=python

set hlsearch
hi Search ctermbg=LightBlue
hi Search ctermfg=black
```

- Go to the end of the file: `G` 
- Go to the beginning of file: `gg` 
- Go to the end of line: `$` 
- Go to the beginning of line: `0` 
- Delete a whole line: `dd` 
- Undo: press `u` or type `:u` or `:2u` (undo two changes) or `:U` (undo all). 
- Redo: `[control] + R` 
- Reload/redraw: `[control] + L` 
- Browse files and folders using file explorer: `:E` 
- Spellcheck: `:set spell` 
- Turn off spellcheck: `:set nospell` 
- Spelling suggestions: `z=` 
- Set user spell file: `:set spellfile=~/.vim/en.utf-8.add` 
- Add new word to the user dictionary: `zg` 
- Remove word from the dictionary: `zug` 
- See line numbers: `:set nu` 
- Hide line numbers: `:set nonu` 

- Installing vimplug: 
```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

- Installing plugins using vimplug: add this to your `.vimrc`
```
call plug#begin('~/.vim/plugged')
Plug 'junegunn/goyo.vim'
call plug#end()
```
Save the file `:w`. Then install plugins by issuing `:PlugInstall`. 

You can modify or add your own settings to a plugin. For example, if you want to call **Limelight** along with **Goyo**. Go to 
```
~/.vim/plugged/goyo.vim/autoload/goyo.vim
``` 
and add a line `Limelight`. You may add other settings, say, `set spell` etc. 

- Convert tabs to spaces. Add the following to your `.vimrc`:
```
set tabstop=4 shiftwidth=4 expandtab
```
Convert existing tabs to spaces by `:retab` (once the above settings are added).

- Compare two files. 
```
vi -d file.txt file-copy.txt
```

#### Select, Copy, Cut, Paste in VIM visual mode
Enter Visual mode by pressing `v`, `V` or `[control] + v` for visual character, line or block modes, respectively. Select text using the arrow keys on the key board. You can: 

- Press `c` it will clear the selected part and enter into insert mode. 
- Press `y` to copy (yanked). 
- You can paste in another location in VIM by pressing `p`. 
- Press `"+y` to copy to system clipboard, you can paste in another program using your system shortcut like `[command] + v` or `[control] + v`. 
