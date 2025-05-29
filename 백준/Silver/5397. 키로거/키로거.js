function solution(input) {
  const testcases = input.slice(1);

  const result = [];

  testcases.forEach((testcase) => {
    const stack1 = [];
    const stack2 = [];
    [...testcase].forEach((inputKey) => {
      if (inputKey === '<')
        if (stack1.length > 0) return stack2.push(stack1.pop());
        else return;
      if (inputKey === '>')
        if (stack2.length > 0) return stack1.push(stack2.pop());
        else return;
      if (inputKey === '-')
        if (stack1.length > 0) return stack1.pop();
        else return;
      stack1.push(inputKey);
    });

    result.push([...stack1, ...stack2.reverse()].join(''));
  });
  return result.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
