#!/bin/bash

# Parse arguments using getopt
PARSED_ARGUMENTS=$(getopt -o hi:o: --long help,input:,output: -- "$@")
if [ $? -ne 0 ]; then
    echo "Error parsing arguments."
    exit 1
fi

# Rearrange arguments as per getopt parsing
eval set -- "$PARSED_ARGUMENTS"

# Initialize variables for options
input_file=""
output_file=""

# Process arguments
while true; do
    case "$1" in
        -h|--help)
            echo "Usage: $0 -i <inputfile> -o <outputfile>"
            echo "       $0 --input <inputfile> --output <outputfile>"
            shift
            exit 0
            ;;
        -i|--input)
            input_file="$2"
            shift 2
            ;;
        -o|--output)
            output_file="$2"
            shift 2
            ;;
        --)
            shift
            break
            ;;
        *)
            echo "Invalid option: $1"
            exit 1
            ;;
    esac
done

# Print parsed arguments
echo "Input file: $input_file"
echo "Output file: $output_file"
echo "Remaining arguments: $@"
