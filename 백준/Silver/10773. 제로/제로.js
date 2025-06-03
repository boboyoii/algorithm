function solution(input) {
  const nums = input.slice(1).map(Number);
  const sumNums = [];

  nums.forEach((num) => {
    if (num === 0 && sumNums.length > 0) return sumNums.pop();
    sumNums.push(num);
  });

  return sumNums.reduce((acc, num) => acc + num, 0);
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
