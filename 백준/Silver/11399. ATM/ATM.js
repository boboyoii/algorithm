const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const times = input[1].split(' ').map(Number);

function solution(N, times) {
  times.sort((a, b) => a - b);

  let totalTime = 0;
  let waitingTime = 0;

  for (let i = 0; i < N; i++) {
    totalTime += waitingTime + times[i];
    waitingTime += times[i];
  }

  return totalTime;
}

console.log(solution(N, times));
