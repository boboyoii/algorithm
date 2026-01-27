const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const times = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(N, times) {
  let count = 0;
  let lastTime = 0;

  times.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

  for (let i = 0; i < N; i++) {
    const [start, end] = times[i];
    if (lastTime > start) continue;
    lastTime = end;
    count += 1;
  }

  return count;
}

console.log(solution(N, times));
