---
title: Regular Expression
---
To demonstrate various examples, we will use a large text file
[A Room with a View by E. M. Forster](/A_Room_with_a_View_by_E_M_Forster.txt)
downloaded from [Project Gutenberg](
https://www.gutenberg.org/cache/epub/2641/pg2641.txt). We will use `egrep`
program to find specific matches in the file. `egrep` is `grep -E` which allows
interpretation of pattern as an extended regular expression. We will wrap our
the regular expression in `'` (single quotes, they are not part of the regular
expression) e.g.,
```bash
egrep '^cat' A_Room_with_a_View_by_E_M_Forster.txt
```

Similarly, when regular expressions are processed by certain languages, we need
to provide the regular expression enclosed between `/`, they are not part of
regular expression but required by the parser to identify regex.

:::tip Good to know

`grep` (`g/re/p`) stands for Global Regular Expression Print.

:::

### Simple character match
```bash
egrep 'cat' A_Room_with_a_View_by_E_M_Forster.txt
```

It will match all instances of cat such as: delicate, indicated, catching,
located etc.

### Meta-characters
**Wild card:** `.` (dot) is the wild card meta-character, it matches any
character including spaces except the newline character. E.g., `/h.t/` will
match hot, hit, hat, that, with the, wish to etc. Similarly, `/.a.a.a/` will
match banana or papaya.

**Escape meta-character:** `/9.00/` will match 9.00, 9500, 9:00. What do we do
if we want to look for 9.00? Escape character comes to rescue: `/9\.00/`. In
case we want a literal backslash, we can use `/\\/`. Do not use escape
characters for characters that are not meta-character such as quotation marks.
Tab character: `\t`, newline: `\n`, `\r` or `\r\n`.

### Anchors

Meta-character | Meaning
 :-----------: | -------
`^`            | Start of line
`$`            | End of line
`\A`           | start of string, never the end of line
`\Z`           | end of string, never the end of line

**Line start:** Regular expression contains various *meta-characters* such as
`^` in the above example. It means the beginning of the line, i.e., `/^cat/`
matches lines that start with `cat`.

**Line ending:** `$` represents the matches at the end of the line. Note that if
the line ending is CRLF (`\r\n`) instead of LF (`\n`), the UNIX/Linux grep might
not work as expected. Convert the line ending from DOS to Unix:
```bash
dos2unix filename.txt

# if dos2unix is not installed, below is the command for Ubuntu/ Debian
sudo apt update
sudo apt install dos2unix
```

Let's say we want to validate a list of email addresses. We assume that valid
TLD is either 2 or 3 characters long (e.g., .in, .com, etc.):
`/^\w+@\w+\.[a-z]{2,3}$/`

Line start and line ending might not work as we expect in single-line mode, to
enable multiline mode, we may need to add `m` after the regular
expression: `/^\w+@\w+\.[a-z]{2,3}$/mgi`, `g` for global, and `i` for case
insensitive.

### Character class
**Character set:** `[ea]` can be used to match either `e` or `a`, e.g., to match
grey or gray, `/gr[ea]y/` or equivalently, `/gr[ae]y/`, however it will not
match `great`. If we need to find any line starting with `cat` or `Cat` we could
use: `/^[Cc]at/`.

**Character range:** Say we are looking for HTML heading tags, we could use:
`<h[123456]>` it will match either of `<h1>`, `<h2>`, ..., `<h6>`. We could
simplify the above expression by using range meta-character: `<h[1-6]>`. `[0-9]`
matches any number, `[a-z]` matches any lowercase English letters. We could use
`31[./-]10[./-]2022` to match a certain date with any one of the usual
separators. The range not necessarily can have numeric or uppercase/lowercase,
they are the ASCII character ranges.

**Negative character set:** in the above example, if we used `/<h^[7-9]>/`, it
means matches that are not `<h7>`, `<h8>` or `<h9>`. Similarly, we could try to
look for words that have q followed by another letter that is not u: `/q[^u]/`.
`/see[^mn]/` will match seek or seed but not seen, seem or see. However, it will
also match "see." or "see ". `/[^a-z0-9A-Z]/` will negate all three ranges, not
just the first one. Notice that `-` is a meta-character inside a character set,
otherwise it is just a regular character. On the other hand `^` has different
meanings: inside a character it makes a negative character set, otherwise, it is
an anchor for the line beginning. Characters (except, `]`, `-`, `^`, and `\`)
inside a character set are regular characters, we do not need to escape them.
E.g., `.` is not a wild card inside a character set but a literal dot.
`/[[(][0-9][)\]]/` will match either a number between parentheses or square
brackets. Notice how we needed to escape the closing square bracket. Match
virtue but not virtues: `/virtue[^s\s]/`.

**Matching any of several sub-expressions:** `^cat|ion$` will match any line
starting with cat or ending with ion. `^cat` and `ion$` are separate
expressions. In our example `gr[ea]y` could be written as `grey|gray`. We can
match 1st or First by `(1|Fir)st`.

**Case insensitive:** We can use the `-i` flag with `egrep` to make our lookup
case insensitive.

**Shorthand character sets:**

Shorthand | Meaning        | Equivalent
--------- | -------------- | ----------
`\d`      | Digit          | `[0-9]`
`\w`      | Word character | `[a-zA-Z0-9_]`
`\s`      | Whitespace     | `[\r\n\t]`
`\D`      | Non digit      | `[^0-9]`
`\W`      | Non word char  | `[^a-zA-Z0-9_]`
`\S`      | Not whitespace | `[^\r\n\t]`

`/\d\d\d\d/` matches 1947, `/\w\w\w/` matches cat, Car, 123, a_1. `/[\w\-]/`
will incorporate `-` with the word character. Note that `/^\d\s/` is not the
same as `/\D\S/`, it is the same as `/\D\s/`. Note that this shorthand might not
be supported by all regex engines.

### Word boundaries
Match any word that starts with cat:
```bash
egrep '\<cat' A_Room_with_a_View_by_E_M_Forster.txt
```

Match any word that ends with ion:
```bash
egrep 'ion\>' A_Room_with_a_View_by_E_M_Forster.txt
```

Word boundaries will act whenever there is a word character followed by a non-
word character. Word characters are `[a-z][A-Z][0-9]_`. Any word boundaries are
denoted by `\b`. Find the standalone letter a's: `/\ba\b/`.

### Optional
How to match either color or colour: `colou?r`. July or Jul: `July?`. January or
Jan: `Jan(uary)?`. Note that the expression inside the parenthesis could be more
complex, but here it is used for simple grouping for the optional.

### Repetition

Meta-character | Meaning
:------------: | -------
`*`            | Preceding item zero, or more times
`+`            | Preceding item one or more times
`?`            | Preceding item one or zero times

Match `<h3 size=14>`:
```bash
egrep <h3 +size *= *14 *> filename.txt
```

`/apples*/` will match apple, apples, or applesss. `/apples+/` will match
apples, or applesss but not apple. `/apples?/` will match apple and apples, but
not applesss.

Match any size value above:
```bash
egrep <h3 +size *= *[0-9]+ *> filename.txt
```

Match any tag with or without size attribute:
```bash
egrep <h3( +size *= *[0-9]+)? *> filename.txt
```

### Range quantifiers
Match 8 to 10 digit numbers: `[0-9]{8,10}`. `{0,1}` is same as `?`; `{1,}` is
same as `+`; `{0,}` same as `*`. Validate US phone numbers:
`/\d{3}-\d{3}-\d{4}/` matches 234-456-6789.

### Grouping
We can use `()` to group. For example, `/(abc)+/` will match `abc`, or `abcabc`,
or `abcabcabc`, etc.

### Resources
- Online Regex Playground: https://regexr.com
- Online Visual Regex Playground: https://extendsclass.com/regex-tester.html
