function solution(input) {
  const standard = +input[0].split(' ')[1];
  const arr = input[1].split(' ').map((v) => +v);
  const printNum = [];

  for (let i = 0; i < arr.length; i++)
    if (arr[i] < standard) printNum.push(arr[i]);

  return printNum.join(' ');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
