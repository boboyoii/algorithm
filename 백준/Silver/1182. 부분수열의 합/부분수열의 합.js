const { count } = require('console');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let cnt = 0;

if (S === 0) cnt = -1;

function solution(cur, total) {
  if (cur === N) {
    if (total === S) cnt++;
    return;
  }
  solution(cur + 1, total);
  solution(cur + 1, total + arr[cur]);
}

solution(0, 0);
console.log(cnt);
