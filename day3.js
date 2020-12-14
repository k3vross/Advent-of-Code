const fs = require('fs');
let slope = fs.readFileSync('day3.txt', {encoding: 'utf-8'}).split('\n');



function countTrees(slope, x, y) {
  let count = 0;
  let i = 0;
  let j = 0;
  let length = slope.length
  while (i < length - 1) {
    i+=y;
    j = (j+x) % slope[0].length;
    if (slope[i][j] === '#') {
      slope[i][j] = 'X';
      count++;
    } else {
      slope[i][j] = '0';
    }
  }
  console.log(slope)
  return count;
}

console.log(countTrees(slope, 3, 1) * countTrees(slope, 1, 1) * countTrees(slope, 5, 1) * countTrees(slope, 7, 1) * countTrees(slope, 1, 2))

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

