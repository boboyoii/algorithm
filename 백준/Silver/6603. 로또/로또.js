const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let result = '';

let arr = Array.from({ length: 6 }, () => 0);

function solution(count, start, S) {
  if (count === 6) {
    result += arr.join(' ') + '\n';
    return;
  }

  if (start > S.length - (6 - count)) {
    return;
  }

  for (let i = start; i < S.length; i++) {
    arr[count] = S[i];
    solution(count + 1, i + 1, S);
  }
}

function main() {
  for (const line of input) {
    if (line === '0') break;

    const S = line.split(' ').map(Number);
    const k = S.shift();

    solution(0, 0, S);

    result += '\n';
  }

  console.log(result);
}

main();
