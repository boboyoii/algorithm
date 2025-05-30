function solution(input) {
  const words = input.slice(1);
  let count = 0;
  words.forEach((word) => {
    const stack = [];
    for (const char of word) {
      if (stack.length === 0) stack.push(char);
      else if (stack[stack.length - 1] === char) stack.pop();
      else stack.push(char);
    }
    if (stack.length === 0) count++;
  });

  return count;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
