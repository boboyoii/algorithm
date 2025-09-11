const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let arr = Array.from({ length: M }, () => 0);
let result = '';

function solution(k) {
  if (k === M) {
    result += arr.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr[k] = i;
    solution(k + 1);
  }
}

solution(0);
console.log(result);
