function solution(input) {
  const n = +input[0];
  const tops = input[1].split(' ').map(Number);
  const stack = [];
  const result = [];

  for (let i = 0; i < n; i++) {
    const currentTop = tops[i];

    while (stack.length > 0) {
      if (stack[stack.length - 1][1] >= currentTop) {
        result.push(stack[stack.length - 1][0]);
        break;
      }
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(0);
    }

    stack.push([i + 1, currentTop]);
  }

  return result.join(' ');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
