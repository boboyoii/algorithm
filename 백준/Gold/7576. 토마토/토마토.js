const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const tomatoes = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(M, N, tomatoes) {
  const visit = Array.from({ length: N }, () => Array(M).fill(-1));
  const queue = [];
  let minDays = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) if (tomatoes[i][j] === 1) queue.push([i, j]);
  }

  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];
    const currentDay = tomatoes[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (tomatoes[nx][ny] !== 0 || tomatoes[nx][ny] === -1) continue;
      queue.push([nx, ny]);
      tomatoes[nx][ny] = currentDay + 1;
      if (minDays < tomatoes[nx][ny]) minDays = tomatoes[nx][ny];
    }
  }

  for (let i = 0; i < N; i++) if (tomatoes[i].includes(0)) return -1;

  return minDays - 1;
}

console.log(solution(M, N, tomatoes));
