const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const videoMap = input.slice(1).map((line) => line.split('').map(Number));
const result = [];

function solution(x, y, N) {
  if (N === 1) {
    result.push(videoMap[x][y]);
    return;
  }

  const base = videoMap[x][y];
  let isUniform = true;

  for (let i = x; i < x + N; i++) {
    for (let j = y; j < y + N; j++) {
      if (base !== videoMap[i][j]) {
        isUniform = false;
        break;
      }
    }
    if (!isUniform) break;
  }

  if (isUniform) {
    result.push(base);
    return;
  }
  const scale = N / 2;
  result.push('(');
  solution(x, y, scale);
  solution(x, y + scale, scale);
  solution(x + scale, y, scale);
  solution(x + scale, y + scale, scale);

  result.push(')');
}

solution(0, 0, N);

console.log(result.join(''));
