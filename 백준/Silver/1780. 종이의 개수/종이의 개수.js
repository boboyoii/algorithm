const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const paperMap = input.slice(1).map((line) => line.split(' ').map(Number));

const index = { '-1': 0, 0: 1, 1: 2 };
const count = [0, 0, 0];

function solution(x, y, N) {
  const base = paperMap[x][y];
  if (N === 1) {
    count[index[base]] += 1;
    return;
  }

  let isUniform = true;

  for (let i = x; i < x + N; i++) {
    for (let j = y; j < y + N; j++) {
      if (paperMap[i][j] != base) {
        isUniform = false;
        break;
      }
    }
    if (!isUniform) break;
  }

  if (isUniform) {
    count[index[base]] += 1;
    return;
  }

  const scale = N / 3;
  solution(x, y, scale);
  solution(x, y + scale, scale);
  solution(x, y + scale * 2, scale);

  solution(x + scale, y, scale);
  solution(x + scale, y + scale, scale);
  solution(x + scale, y + scale * 2, scale);

  solution(x + scale * 2, y, scale);
  solution(x + scale * 2, y + scale, scale);
  solution(x + scale * 2, y + scale * 2, scale);
}

solution(0, 0, N);

console.log(count.join('\n'));
