const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const size = Number(input[0]);
const paperBoard = input.slice(1).map((line) => line.split(' '));
const count = [0, 0];

countPapers(size);
console.log(count[0]);
console.log(count[1]);

function countPapers(size, x = 0, y = 0) {
  const baseColor = paperBoard[x][y];
  let isUniform = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (baseColor !== paperBoard[i][j]) {
        isUniform = false;
        break;
      }
    }
  }

  if (isUniform) return count[baseColor]++;

  const newSize = size / 2;
  countPapers(newSize, x, y);
  countPapers(newSize, x + newSize, y);
  countPapers(newSize, x, y + newSize);
  countPapers(newSize, x + newSize, y + newSize);
}
