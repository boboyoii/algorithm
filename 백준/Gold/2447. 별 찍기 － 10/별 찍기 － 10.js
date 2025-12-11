const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const N = +input;
const result = Array.from({ length: N }, () => Array(N).fill(' '));

function draw(N, x, y) {
  if (N === 3) {
    for (let i = x; i < x + N; i++) {
      for (let j = y; j < y + N; j++) {
        if (i === x + 1 && j === y + 1) continue;
        result[i][j] = '*';
      }
    }
    return;
  }

  const newN = N / 3;

  for (let i = x; i < x + N; i += newN) {
    for (let j = y; j < y + N; j += newN) {
      if (i === x + newN && j === y + newN) continue;
      draw(newN, i, j);
    }
  }
}

draw(N, 0, 0);
console.log(result.map((line) => line.join('')).join('\n'));
