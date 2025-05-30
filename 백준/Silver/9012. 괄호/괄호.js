function solution(input) {
  const PSs = input.slice(1);

  PSs.forEach((ps) => {
    const stack = [];
    let balanced = true;

    for (const char of ps) {
      if (char === '(') stack.push(char);
      if (stack.length === 0) {
        balanced = false;
        break;
      } else if (char === ')') stack.pop();
    }

    console.log(stack.length === 0 && balanced ? 'YES' : 'NO');
  });
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
