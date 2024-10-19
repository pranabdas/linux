---
title: gnuplot
---

## Installation

On Ubuntu/Debian:
```bash
apt install gnuplot
```

On macOS:
```bash
brew install aquaterm --cask
brew install gnuplot --with-aquaterm --with-qt5
```

Now you can access gnuplot by `gnuplot` command on the terminal.

## Basic plotting

Plot a function:
```bash
gnuplot> plot besj0(x)
```

![gnuplot-01](../static/img/gnuplot-01.webp)

Maybe you want fix the x-range:
```bash
gnuplot> plot [-pi:pi] sin(x)
```

![gnuplot-02](../static/img/gnuplot-02.webp)

Maybe you want fix both x and y-range:
```bash
gnuplot> plot [-pi:pi] [-1.2:1.5] sin(x)
```

![gnuplot-03](../static/img/gnuplot-03.webp)

Plotting multiple functions at the same time:
```bash
gnuplot> plot sin(x), besj0(x)
```

![gnuplot-04](../static/img/gnuplot-04.webp)

Making surface plot
```bash
gnuplot> splot x**2+y**2
```

![gnuplot-05](../static/img/gnuplot-05.webp)

Making things look prettier, setting grid:
```bash
gnuplot> set grid
gnuplot> plot sin(x)
```

you may use `replot` to plot previous plot
```bash
gnuplot> set grid
gnuplot> set xlabel “Theta”
gnuplot> set ylabel “Sin(Theta)”
gnuplot> set title “Theta vs. Sin(theta)”
gnuplot> replot
```

![gnuplot-06](../static/img/gnuplot-06.webp)

Plotting data from file (the file contains two column data)
```bash
gnuplot> plot "file.txt"
```

Specify columns to plot
```bash
gnuplot> plot "file.txt" u 1:2
```

You can combine function plot with plot using data files
```bash
gnuplot> plot "file.txt", sin(x)
```

### Two dependent y-axes
```bash
gnuplot> set terminal aqua font "Segue UI Light, 16"
gnuplot> set ytics nomirror
gnuplot> set y2tics -50, 50
gnuplot> plot sin(1/x) axis x1y1, 100*besj0(x) axis x1y2
gnuplot> set ytics -1, 0.5
gnuplot> set ylabel "Y1"
gnuplot> set y2label "Y2"
gnuplot> set xlabel "X"
gnuplot> replot
```

![gnuplot-07](../static/img/gnuplot-07.webp)

### Sample size
Set samples size in Gnuplot while plotting functions. Sometimes the finest
features of a function cannot be seen using default sample size, try this
following example.

```bash
gnuplot> plot sin(1/x)
```

![gnuplot-08](../static/img/gnuplot-08.webp)

```bash
gnuplot> set samples 200
gnuplot> replot
```

![gnuplot-09](../static/img/gnuplot-09.webp)

## Resources
- http://www.gnuplot.info
