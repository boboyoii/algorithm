const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const N = +input;
const width = 5 * (N / 3) + (N / 3 - 1);
const mid = Math.floor(width / 2);
const result = Array.from({ length: N }, () => Array(width).fill(' '));

function draw(N, x, y) {
  if (N === 3) {
    for (let i = x; i < x + 3; i++) {
      for (let j = y - 2; j < y + 3; j++) {
        if (i === x)
          if (j === y - 2 || j === y - 1 || j === y + 1 || j === y + 2)
            continue;
        if (i === x + 1) if (j === y - 2 || j === y || j === y + 2) continue;
        result[i][j] = '*';
      }
    }
    return;
  }

  const newN = N / 2;
  draw(newN, x, y);
  draw(newN, x + newN, y - newN);
  draw(newN, x + newN, y + newN);
}

draw(N, 0, mid);
console.log(result.map((line) => line.join('')).join('\n'));