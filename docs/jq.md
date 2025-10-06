---
title: "jq: CLI JSON Processor"
sidebar_label: jq - JSON Processor
---

## Basic examples

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
cat > data.json << EOF
{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}
EOF

name=$(jq '.name' data.json)
age=$(jq '.age' data.json)
city=$(jq '.city' data.json)

echo "$name is $age years old and lives in $city"
rm data.json
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
cat > data.json << EOF
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

jq -c '.[]' data.json | while read -r item; do
  name=$(echo "$item" | jq -r '.name')
  age=$(echo "$item" | jq -r '.age')
  echo "Name: $name, Age: $age"
done
rm data.json
```

In case of arbitrary keys in an object:
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

Update an json object:
```bash
cat > data.json << EOF
{
  "name": "Alice",
  "age": 30
}
EOF

jq '.age = 32' data.json > tmp.json
mv tmp.json data.json
cat data.json
rm data.json
```

Update an array of objects based key match:
```bash
cat > data.json << EOF
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

jq --arg name "Alice" --arg age 31 'map(if .name == $name then .age = $age else . end)' data.json > tmp.json
mv tmp.json data.json
cat data.json
rm data.json
```

Select item based on key:
```bash
cat > data.json << EOF
[
  { "id": 1, "status": "pending" },
  { "id": 2, "status": "pending" },
  { "id": 3, "status": "pending" }
]
EOF

jq '.[] | select(.id == 2) | .status = "completed"' data.json
rm data.json
```

## Convert jq array to bash list

```bash
cat > data.json << EOF
[
  "one",
  "two",
  "three"
]
EOF

list=$( cat data.json | jq -r '.[]' )

for item in "${list[@]}"; do
  echo $item
done

rm data.json
```

## Pretty print json

```bash
cat > data.json << EOF
[{
    "name": "Alice", "age": 30
  },
  {
     "name": "Bob",
"age": 35}
]
EOF

cat data.json | jq '.' > tmp.json
mv tmp.json data.json
cat data.json
rm data.json
```

## Resources
- [jqlang.org](https://jqlang.org)
- [yq](https://github.com/mikefarah/yq/) (similar to jq, but works with both
YAML and JSON).
