const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(str) {
  const result = [];
  const temp = [];

  for (const char of str) {
    if (temp[temp.length - 1] === '<') {
      result.push(char);
      if (char === '>') temp.pop();
      continue;
    }

    if (char === '<' || char === ' ') {
      while (temp.length > 0) {
        result.push(temp.pop());
      }
      if (char === '<') temp.push(char);
      result.push(char);
      continue;
    }

    temp.push(char);
  }

  while (temp.length > 0) {
    result.push(temp.pop());
  }

  return result.join('');
}

console.log(solution(input));
