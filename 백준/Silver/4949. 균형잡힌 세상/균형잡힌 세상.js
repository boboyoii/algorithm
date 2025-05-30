const pair = {
  ')': '(',
  ']': '[',
};

const bracket = new Set(['(', '[']);

function solution(input) {
  input.forEach((str) => {
    let balanced = true;
    if (str === '.') return;
    const stack = [];
    for (const char of str) {
      if (char === '.') break;
      if (bracket.has(char)) stack.push(char);
      else if (char === ')' || char === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== pair[char]) {
          balanced = false;
          break;
        }
        stack.pop();
      }
    }
    console.log(stack.length === 0 && balanced ? 'yes' : 'no');
  });
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
