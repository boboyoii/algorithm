const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function solution(N, arr) {
  let result = 0;
  const positiveArr = arr.filter((val) => val > 0);
  const negativeArr = arr.filter((val) => val <= 0);

  result += maxSum(positiveArr.reverse());
  result += maxSum(negativeArr);

  return result;
}

function maxSum(arr) {
  let sum = 0;
  let before = null;

  for (let i = 0; i < arr.length; i++) {
    if (before === null) {
      before = arr[i];
      continue;
    }

    if (before * arr[i] > before + arr[i]) {
      sum += before * arr[i];
      before = null;
    } else {
      sum += before;
      before = arr[i];
    }
  }

  if (before !== null) return before + sum;
  return sum;
}

console.log(solution(N, arr));
