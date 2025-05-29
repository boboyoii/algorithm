function solution(input) {
  const commandLines = input.slice(1);

  const queue = [];
  let head = 0;

  commandLines.forEach((commandLine) => {
    const command = commandLine.split(' ')[0];
    if (command == 'push') queue.push(commandLine.split(' ')[1]);
    if (command == 'pop')
      console.log(queue.length - head > 0 ? queue[head++] : '-1');
    if (command == 'size') console.log(`${queue.length - head}`);
    if (command == 'empty') console.log(queue.length - head > 0 ? '0' : '1');
    if (command == 'front')
      console.log(queue.length - head > 0 ? queue[head] : '-1');
    if (command == 'back')
      console.log(queue.length - head > 0 ? queue[queue.length - 1] : '-1');
  });
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
