const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const weights = input.slice(1).map(Number);

function solution(N, weights) {
  let max = 0;
  weights.sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    if (max > weights[i] * (i + 1)) continue;
    max = weights[i] * (i + 1);
  }

  return max;
}

console.log(solution(N, weights));
