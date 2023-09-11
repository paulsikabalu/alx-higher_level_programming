#!/usr/bin/node
const args = process.argv.slice(2); // Get the list of arguments

if (args.length === 0) {
  console.log(0); // No arguments passed, so print 0
} else if (args.length === 1) {
  console.log(0); // Only one argument passed, so print 0
} else {
  // Convert the arguments to integers and sort them in descending order
  const integers = args.map(arg => parseInt(arg)).sort((a, b) => b - a);

  // Find the second biggest integer
  const secondBiggest = integers[1];

  console.log(secondBiggest);
}
