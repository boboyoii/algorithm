function solution(input) {
  let count = 0;
  let isLaser = true;
  const stack = [];

  for (const char of input) {
    if (char == '(') {
      stack.push(char);
      if (!isLaser) isLaser = true;
      continue;
    }
    if (char == ')') {
      stack.pop();
      if (isLaser) {
        count += stack.length;
        isLaser = false;
      } else count++;
    }
  }
  return count;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(input));
