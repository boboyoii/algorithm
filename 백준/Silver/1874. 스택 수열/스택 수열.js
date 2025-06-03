function solution(input) {
  const n = +input[0];
  let num = 1;
  const sequence = input.slice(1).map(Number);
  let pos = 0;
  let enable = true;
  const stack = [];
  const print = [];

  while (pos < sequence.length) {
    if (num > n + 1) {
      enable = false;
      break;
    }

    if (stack.length === 0) {
      print.push('+');
      stack.push(num++);
      continue;
    }

    if (sequence[pos] === stack[stack.length - 1]) {
      pos += 1;
      print.push('-');
      stack.pop();
    } else {
      print.push('+');
      stack.push(num++);
    }
  }

  if (!enable) return 'NO';

  return print.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
