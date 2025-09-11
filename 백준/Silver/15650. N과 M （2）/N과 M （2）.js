const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];

function solution(k, arr) {
  if (arr.length === M) {
    console.log(arr.join(' '));
    return;
  }

  if (k > N) return;

  arr.push(k);
  solution(k + 1, arr);
  arr.pop();
  solution(k + 1, arr);
}

solution(1, arr);
