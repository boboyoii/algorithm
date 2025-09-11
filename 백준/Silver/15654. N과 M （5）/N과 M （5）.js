const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const num = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const isused = Array.from({ length: N }, () => false);
let arr = Array.from({ length: M }, () => 0);
let result = '';

function solution(k) {
  if (k === M) {
    result += arr.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!isused[i]) {
      arr[k] = num[i];
      isused[i] = true;
      solution(k + 1);
      isused[i] = false;
    }
  }
}

solution(0, 0);
console.log(result);
