#!/usr/bin/node

const size = process.argv[2]; // Get the size argument from the command line

// Check if the size argument is provided and can be converted to an integer
if (!isNaN(parseInt(size))) {
  const squareSize = parseInt(size);

  for (let i = 0; i < squareSize; i++) {
    let row = '';

    for (let j = 0; j < squareSize; j++) {
      row += 'X';
    }

    console.log(row);
  }
} else {
  console.log("Missing size");
}
