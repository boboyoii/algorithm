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

const uniqArr = [...new Set(arr)];
const n = uniqArr.length;

const result = [];
const temp = [];

function solution(k) {
  if (k === M) {
    result.push(temp.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    temp.push(uniqArr[i]);
    solution(k + 1);
    temp.pop();
  }
}

solution(0, 0);
console.log(result.join('\n'));
