function solution(n) {
  const D = Array(n).fill(1);

  if (n === 1 || n === 2 || n === 3) return 1;

  for (let i = 3; i < n; i++) D[i] = D[i - 2] + D[i - 3];

  return D[n - 1];
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const t = +input[0];
const testcase = input.slice(1).map(Number);

for (let i = 0; i < t; i++) {
  const p = solution(testcase[i]);
  console.log(p);
}
