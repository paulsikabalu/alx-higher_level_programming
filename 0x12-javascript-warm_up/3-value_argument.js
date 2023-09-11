#!/usr/bin/node

const firstArg = process.argv[2]; // Access the first command-line argument

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log("No argument");
}
