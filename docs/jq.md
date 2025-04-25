---
title: "jq: CLI JSON processor"
sidebar_label: jq
---

Parse object:
```bash
json='{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}'

name=$(echo "$json" | jq -r '.name')
age=$(echo "$json" | jq -r '.age')
city=$(echo "$json" | jq -r '.city')

echo "$name is $age years old and lives in $city"
# Alice is 30 years old and lives in New York
```

jq can directly read from file:
```bash
cat > data.txt << EOF
{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}
EOF

name=$(jq '.name' data.txt)
age=$(jq '.age' data.txt)
city=$(jq '.city' data.txt)

echo "$name is $age years old and lives in $city"
rm data.txt
```

Or read from API endpoint:
```bash
name=$( curl -s https://api.github.com/users/pranabdas | jq -r '.name' )
location=$( curl -s https://api.github.com/users/pranabdas | jq -r '.location' )
echo "$name is from $location."
# Pranab Das is from Singapore.
```

Iterate over an array of items:
```bash
cat > data.txt << EOF
[
  {
    "name": "Alice",
    "age": 30
  },
  {
    "name": "Bob",
    "age": 35
  }
]
EOF

jq -c '.[]' data.txt | while read -r item; do
  name=$(echo "$item" | jq -r '.name')
  age=$(echo "$item" | jq -r '.age')
  echo "Name: $name, Age: $age"
done
rm data.txt
```

In case of arbitrary key in an object:
```bash
json='{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}'

echo "$json" | jq -r 'to_entries[] | "\(.key)=\(.value)"' | while IFS='=' read -r key value; do
  echo "key: $key, value: $value"
done
```

## Resources
- [jqlang.org](https://jqlang.org)
