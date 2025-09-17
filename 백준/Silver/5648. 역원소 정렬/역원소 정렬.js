const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' '))
  .flat()
  .filter(Number);

function solution(input) {
  const N = Number(input[0]);
  const nums = input.slice(1, 1 + N);
  const reverseNums = [];

  for (const num of nums) {
    const reverseNum = Number(num.split('').reverse().join(''));
    reverseNums.push(reverseNum);
  }

  return reverseNums.sort((a, b) => a - b).join('\n');
}

console.log(solution(input));
