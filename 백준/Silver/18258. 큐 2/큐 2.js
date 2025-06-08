function solution(input) {
  const N = +input[0];
  const commandLines = input.slice(1);
  const queue = [];
  let front = 0;
  const result = [];

  for (let i = 0; i < N; i++) {
    const [command, value] = commandLines[i].split(' ');
    switch (command) {
      case 'push':
        queue.push(value);
        break;
      case 'pop':
        result.push(queue.length === front ? -1 : queue[front++]);
        break;
      case 'size':
        result.push(queue.length - front);
        break;
      case 'empty':
        result.push(queue.length === front ? 1 : 0);
        break;
      case 'front':
        result.push(queue.length === front ? -1 : queue[front]);
        break;
      case 'back':
        result.push(queue.length === front ? -1 : queue[queue.length - 1]);
        break;
      default:
        break;
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
