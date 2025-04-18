function solution(data) {
  const card = new Set(data[1].split(' '));
  const exist = [];

  for (const integerCard of data[3].split(' ')) {
    if (card.has(integerCard)) exist.push(1);
    else exist.push(0);
  }

  return exist.join(' ');
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(data));
