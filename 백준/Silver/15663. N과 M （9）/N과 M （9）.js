const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const numCount = {};

for (let i = 0; i < N; i++) {
  numCount[arr[i]] = (numCount[arr[i]] || 0) + 1;
}
const uniqArr = [...new Set(arr)];
const used = Array(uniqArr.length).fill(0);

const result = [];
const temp = [];

function solution(k) {
  if (k === M) {
    result.push(temp.join(' '));
    return;
  }

  for (let i = 0; i < uniqArr.length; i++) {
    const num = uniqArr[i];
    if (used[i] === numCount[num]) continue;

    temp.push(num);
    used[i] += 1;
    solution(k + 1);
    temp.pop();
    used[i] -= 1;
  }
}

solution(0);
console.log(result.join('\n'));
