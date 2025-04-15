const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let uniqueWord = new Set(input);
let word = [...uniqueWord].filter((val, idx) => idx != 0);

word = word.sort();
word = word.sort((a, b) => a.length - b.length);

console.log(word.join('\n'));
