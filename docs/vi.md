---
title: VI / VIM editor
sidebar_label: Vi editor
---

VI / VIM is a simple and powerful editor. If you are accessing a remote
workstation or cluster where you don't have the option to launch graphical
programs, VIM is a great option. Almost any Linux or UNIX system has VI editor
preinstalled. Recent OS will likely have VIM (**V**i **IM**proved) instead of
classic VI editor. You can check the version of VI by:

```bash
vi --version
```

In case it is not installed in your system, you can install using a package
manager:
```bash
# ubuntu / debian
apt install vim
```

- Open / create a `file_name` to read and/or write:
```bash
vi file_name
```

- Go into `INSERT` mode by (check in the bottom of the window for `--INSERT--`)
by pressing [shift]+[I] or simply [I].


- Go into `REPLACE` mode (check in the bottom for `--REPLACE--`) by pressing
[shift] + [R].

- Go into readonly / normal mode by pressing [esc].

- To save file, first go into readonly mode (`[esc]`) and then type:
```vim
:w
```

- To exit vim, first go into readonly mode (`[esc]`) and then:
```vim
:q
```

- You can combine both to save and exit (keyboard shortcut [Shift]+[Z Z]):
```vim
:wq
```

- Exit without saving (keyboard shortcut [Shift]+[Z Q]):
```vim
:q!
```

- Search in the file: Type `/` followed by the phrase you are looking for. Press
`N` go to next match. You can search backwards using `?`

- See line numbers: `:set nu`
- Hide line numbers: `:set nonu`
- Spellcheck: `:set spell`
- Turn off spellcheck: `:set nospell`
- Set user spell file: `:set spellfile=~/.vim/en.utf-8.add`
- Browse files and folders using file explorer: `:E`

## Keyboard shortcuts

Key bindings | Description
------------ | -----------
G            | Go to the end of the file
5G           | Go to specific line of the file (here line 5)
5H           | Move relative to the top line on the screen
3L           | Move relative to the bottom line on the screen
gg           | Go to the beginning of file
control + F  | Scroll forward one page
control + B  | Scroll backward one page
$            | Go to the end of line
0            | Go to the beginning of line
dd           | Delete a whole line
u            | Undo (or type `:u`; `:2u` (undo twice) or `:U` (undo all))
control + R  | Redo
control + L  | Redraw / reload
z=           | Spelling suggestions
zg           | Add new word to the user dictionary
zug          | Remove word from the dictionary
**.**        | Repeat last command
db           | Delete one word backwards
dw           | Delete one word forwards
d$ / D       | Delete to the end of line
d0           | Delete to the beginning of line


- Compare two files:
```bash
vi -d file.txt file_edit.txt
```

- Move a line up / down: this can be achieved by few key combinations. To move one line above its current position: `ddkP`.
    - `dd` to delete current line and put it in default register
    - `k` or `j` to move up or down
    - `P` to paste above current line.

## visual mode

Enter Visual mode by pressing `v`, `V` or `[control] + v` for visual character,
line or block modes, respectively. Select text using the arrow keys on the key
board. You can:

- Press `c` it will clear the selected part and enter into insert mode.
- Press `y` to copy (yanked).
- You can paste in another location in VIM by pressing `p`.
- Press `"+y` to copy to system clipboard, you can paste in another program
using your system shortcut like `[command] + v` or `[control] + v`.

- Comment multiple lines:
    - Enter block visual mode: [control] + v
    - Select the lines (first col) using up / down arrow keys
    - Enter insert mode: [shift] + i
    - Type commenting character e.g., `#`
    - Press [esc].

- Un-comment multiple lines:
    - Enter block visual mode: [control] + v
    - Select the lines (one or multiple columns) using arrow keys
    - Press `x` followed by [esc].

## vimrc
You can customize your vi editor by creating a `~/.vimrc` file and saving your
settings there. Like:

```vim
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

- Convert tabs to spaces. Add the following to your `.vimrc`:
```vim
set tabstop=4 shiftwidth=4 expandtab
```
Convert existing tabs to spaces by `:retab` (once the above settings are added).

## Plugins
- Installing vimplug:
```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

- Installing plugins using vimplug: add this to your `.vimrc`
```vim
call plug#begin('~/.vim/plugged')
Plug 'junegunn/goyo.vim'
call plug#end()
```
Save the file `:w`. Then install plugins by issuing `:PlugInstall`.

You can modify or add your own settings to a plugin. For example, if you want to call **Limelight** along with **Goyo**. Go to
```bash
~/.vim/plugged/goyo.vim/autoload/goyo.vim
```

and add a line `Limelight`. You may add other settings, say, `set spell` etc.
