function solution(data) {
  const A = new Set(data[1].split(' '));

  const exist = [];

  for (const M of data[3].split(' ')) {
    if (A.has(M)) exist.push(1);
    else exist.push(0);
  }

  return exist.join('\n');
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(data));
