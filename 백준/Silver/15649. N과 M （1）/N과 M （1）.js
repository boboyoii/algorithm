const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const N = Number(input[0]);
const M = Number(input[1]);

const arr = Array.from({ length: M }, () => 0);
const isused = Array.from({ length: N }, () => false);

solution(0);

function solution(k) {
  if (k === M) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!isused[i - 1]) {
      arr[k] = i;
      isused[i - 1] = true;
      solution(k + 1);
      isused[i - 1] = false;
    }
  }
}
