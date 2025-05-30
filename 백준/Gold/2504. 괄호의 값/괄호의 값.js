const pair = {
  ')': '(',
  ']': '[',
};

const digit = {
  '(': 2,
  ')': 2,
  '[': 3,
  ']': 3,
};

function solution(input) {
  const stack = [];
  let value = 1;
  let result = 0;
  let save = true;

  for (const char of input) {
    if (char in pair) {
      if (stack.length === 0 || stack.pop() !== pair[char]) return 0;
      if (save) result += value;
      save = false;
      value /= digit[char];
    } else {
      stack.push(char);
      value *= digit[char];
      if (!save) save = true;
    }
  }

  if (stack.length !== 0) return 0;
  return result;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(input));
