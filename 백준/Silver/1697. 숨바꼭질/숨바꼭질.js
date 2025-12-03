const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);

function solution(N, K) {
  const queue = [];
  let index = 0;
  const time = Array(100001).fill(-1);

  time[N] = 0;
  queue.push(N);

  while (time[K] === -1) {
    const current = queue[index++];

    if (current - 1 >= 0 && time[current - 1] === -1) {
      queue.push(current - 1);
      time[current - 1] = time[current] + 1;
    }

    if (current + 1 < time.length && time[current + 1] === -1) {
      queue.push(current + 1);
      time[current + 1] = time[current] + 1;
    }
    if (current * 2 < time.length && time[current * 2] === -1) {
      queue.push(current * 2);
      time[current * 2] = time[current] + 1;
    }
  }

  return time[K];
}

console.log(solution(N, K));
