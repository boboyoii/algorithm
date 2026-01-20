const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const str = input[0];
const explosionStr = input[1];

function solution(str, explosionStr) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);

    let pos = result.length - 1;
    let exist = false;
    for (let j = explosionStr.length - 1; j >= 0; j--) {
      if (explosionStr[j] !== result[pos]) break;

      if (j === 0) exist = true;
      pos -= 1;
    }

    if (exist) for (let j = 0; j < explosionStr.length; j++) result.pop();
  }

  if (result.length === 0) return 'FRULA';

  return result.join('');
}

console.log(solution(str, explosionStr));
