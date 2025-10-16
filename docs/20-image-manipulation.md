---
title: Image manipulation with WebP and ImageMagick
sidebar_label: Image manipulation
---

## WebP conversion
WebP compression reduces image sizes considerably for web usage while
maintaining good enough quality. You can install webp using a package manager or
download the binaries for your operating system:

```bash
# on macos
brew install webp

# on ubuntu/debian
apt update && apt install -y --no-install-recommends webp

# rhel
dnf in -y epel-release
dnf config-manager --set-enabled crb
dnf in -y libwebp-tools
```

Or download precompiled binaries for your operation system -
https://developers.google.com/speed/webp/docs/precompiled
```bash
VERSION="1.6.0"
wget https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-${VERSION}-linux-x86-64.tar.gz
tar -xf libwebp-${VERSION}-linux-x86-64.tar.gz
rm libwebp-${VERSION}-linux-x86-64.tar.gz
export PATH=${PWD}/libwebp-${VERSION}-linux-x86-64/bin:$PATH
```

Convert image:
```bash
cwebp in.png -o out.webp

# adjust quality (default 75)
cwebp -q 80 in.png -o out.webp
```

Batch conversion:
```bash
for file in $( ls *.png); do cwebp "${file}" -o "${file%*.png}.webp"; done
```

## Manipulate image with ImageMagick

Install in Ubuntu/Debian:
```bash
apt update && apt install imagemagick
```

Resize an image:
```bash
convert input.jpg -resize 800x output.jpg
convert input.jpg -resize 800x -quality 80 output.jpg
convert input.jpg -resize 800x -quality 80 -filter Lanczos -sharpen 0x0.8 output.jpg
```

Resize using alternative `magick` command:
```bash
magick input.jpg -filter Lanczos -resize 800x -unsharp 0x0.8+0.8+0.02 -quality 80 output.jpg
```

Crop image:
```bash
# crop (WxH+x_offset+y_offset)
magick in.jpg -crop 800x1200+100+200 +repage out.jpg
magick in.jpg -crop 60%x40%+100+200 +repage out.jpg
```

We can use `magick` command to convert to `webp` alongside resize:
```bash
magick in.jpg -auto-orient -filter Lanczos -resize 800x \
    -unsharp 0x0.8+0.8+0.02 -strip \
    -define webp:method=6 -quality 80 out.webp
```

## Links
- https://developers.google.com/speed/webp
