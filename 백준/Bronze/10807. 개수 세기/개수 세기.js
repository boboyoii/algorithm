function solution(input) {
  const N = input[1].split(' ').map((n) => +n);
  const count = {};

  for (let i = 0; i < N.length; i++) {
    if (!(N[i] in count)) count[N[i]] = 1;
    else count[N[i]]++;
  }

  const v = +input[2];
  if (!(v in count)) return 0;
  return count[v];
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
