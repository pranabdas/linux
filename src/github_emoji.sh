if [ -d "assets" ]; then
  rm -rf assets
fi
mkdir assets

wget https://api.github.com/emojis -O data.json

python3 <<EOF
import json

fid = open('data.json')
data = json.load(fid)
fid.close()

fid = open('wget_urls', 'w')
for key, value in data.items():
    fid.write("wget {0} -O assets/{1}.png\n".format(value, key))
fid.close()

fid = open('README.md', 'w')
fid.write("# GitHub emoji assets\n\nThis repository contains the GitHub emoji assets in PNG format. Here are all the {0} emojis:\n\nName | Emoji\n---- | -----\n".format(len(data)))
for key in data.keys():
    fid.write('{0} | <img src="assets/{0}.png" alt="{0}" width=20/>\n'.format(key))
fid.close()
EOF

sh wget_urls
rm data.json wget_urls
