#!/usr/bin/node
const arg1 = process.argv[2]; // Access the first command-line argument
const arg2 = process.argv[3]; // Access the second command-line argument

if (arg1 !== undefined && arg2 !== undefined) {
  console.log(`${arg1} is ${arg2}`);
} else {
  console.log("Please provide two arguments.");
}
