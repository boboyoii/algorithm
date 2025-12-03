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

const [N, M] = input[0].split(' ').map(Number);
const mazeMap = input.slice(1).map((line) => line.split(''));

function solution(N, M, mazeMap) {
  const dist = Array.from({ length: N }, () => Array(M).fill(-1));
  const queue = [];
  queue.push([0, 0]);
  dist[0][0] = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    const currentDist = dist[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (mazeMap[nx][ny] === '0') continue;
      if (dist[nx][ny] !== -1) continue;
      queue.push([nx, ny]);
      dist[nx][ny] = currentDist + 1;
    }
  }

  return dist[N - 1][M - 1];
}

console.log(solution(N, M, mazeMap));
