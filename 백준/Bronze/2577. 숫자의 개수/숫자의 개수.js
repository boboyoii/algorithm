function solution(input) {
  let result = input[0] * input[1] * input[2];

  const count = Array.from({ length: 10 }, () => 0);

  while (result !== 0) {
    const value = result % 10;
    count[value]++;
    result = Math.floor(result / 10);
  }
  return count.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

console.log(solution(input));
