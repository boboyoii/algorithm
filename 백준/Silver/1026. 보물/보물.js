const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

function solution(N, a, b) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => y - x);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

console.log(solution(N, a, b));
