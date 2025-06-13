function solution(input) {
  const test = input.slice(1);
  const result = [];
  for (let i = 0; i < test.length; i += 3) {
    const commands = test[i];
    const n = +test[i + 1];
    let array = [];
    if (n !== 0)
      array = test[i + 2].slice(1, test[i + 2].length - 1).split(',');
    let error = false;
    let head = 0;
    let rear = array.length - 1;
    let reverse = false;

    for (const command of commands) {
      if (command === 'R') reverse = reverse === false ? true : false;
      if (command === 'D')
        if (rear >= head)
          if (reverse) rear -= 1;
          else head += 1;
        else {
          error = true;
          break;
        }
    }

    if (error) result.push('error');
    else {
      array = array.slice(head, rear + 1);
      if (reverse) array.reverse();
      result.push(`[${array}]`);
    }
  }

  return result.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
