function solution(input) {
  const building = input.slice(1).map(Number);
  const result = [];
  const stack = [];

  for (let i = building.length - 1; i >= 0; i--) {
    let count = 0;

    while (stack.length > 0) {
      if (stack[stack.length - 1][0] >= building[i]) break;
      count += 1;
      count += stack[stack.length - 1][1];
      stack.pop();
    }

    result.push([building[i], count]);
    stack.push([building[i], count]);
  }

  return result.reduce((acc, [_, count]) => acc + count, 0);
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
