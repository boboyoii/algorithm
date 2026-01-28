const expression = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let signs = expression.match(/[+-]/g);
if (signs === null) signs = [];
const numbers = expression.split(/[+-]/);

function solution(signs, numbers) {
  const stack = [];
  stack.push(Number(numbers[0]));

  for (let i = 0; i < signs.length; i++) {
    const num = Number(numbers[i + 1]);
    if (signs[i] === '-') stack.push(num);
    else {
      const temp = stack.pop() + num;
      stack.push(temp);
    }
  }

  return stack.reduce((acc, num) => acc - num, stack[0] * 2);
}

console.log(solution(signs, numbers));
