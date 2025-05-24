function solution(input) {
  const x = +input[2];
  const arr = input[1].split(' ').map((v) => +v);

  arr.sort((a, b) => a - b);

  let ltr = 0;
  let rtr = arr.length - 1;

  let count = 0;
  while (ltr < rtr) {
    const a = arr[ltr] + arr[rtr];
    if (a === x) {
      count++;
      ltr++;
      rtr--;
    } else if (a < x) ltr++;
    else rtr--;
  }

  return count;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
