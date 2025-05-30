function solution(input) {
  const commandLines = input.slice(1);

  const deck = [];

  commandLines.forEach((commandLine) => {
    const command = commandLine.split(' ')[0];
    if (command == 'push_front') deck.unshift(commandLine.split(' ')[1]);
    if (command == 'push_back') deck.push(commandLine.split(' ')[1]);
    if (command == 'pop_front')
      console.log(deck.length > 0 ? deck.shift() : '-1');
    if (command == 'pop_back') console.log(deck.length > 0 ? deck.pop() : '-1');
    if (command == 'size') console.log(`${deck.length}`);
    if (command == 'empty') console.log(deck.length === 0 ? '1' : '0');
    if (command == 'front') console.log(deck.length > 0 ? deck[0] : '-1');
    if (command == 'back')
      console.log(deck.length > 0 ? deck[deck.length - 1] : '-1');
  });
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
