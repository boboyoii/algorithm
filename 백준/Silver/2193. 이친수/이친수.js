const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const n = +input;

function solution(n) {
  const D = Array(n).fill(1n);

  for (let i = 2; i < n; i++) {
    D[i] = D[i - 1] + D[i - 2];
  }

  return String(D[n - 1]);
}

console.log(solution(n));
