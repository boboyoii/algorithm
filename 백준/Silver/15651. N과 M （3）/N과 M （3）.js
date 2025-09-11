const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
let result = '';

function solution(arr) {
  if (arr.length === M) {
    result += arr.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    solution(arr);
    arr.pop();
  }
}

solution(arr);
console.log(result);
