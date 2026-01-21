const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const array = input[1].split(' ').map(Number);

function solution(n, array) {
  const D = Array(n).fill(0);
  D[0] = array[0];

  for (let i = 1; i < n; i++)
    D[i] = Math.max(D[i - 1], array[i - 1], 0) + array[i];

  return Math.max(...D);
}

console.log(solution(n, array));
