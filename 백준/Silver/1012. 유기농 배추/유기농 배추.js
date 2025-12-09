const dir = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = input[0];
const result = [];

let lineIndex = 1;
for (let i = 0; i < T; i++) {
  const [M, N, K] = input[lineIndex++].split(' ').map(Number);
  const position = input.slice(lineIndex, lineIndex + K);
  lineIndex += K;
  const wormCount = solution(M, N, position);
  result.push(wormCount);
}

console.log(result.join('\n'));

function solution(M, N, position) {
  const dist = Array.from({ length: N }, () => Array(M).fill(0));
  const visit = Array.from({ length: N }, () => Array(M).fill(0));
  let result = 0;

  for (let i = 0; i < position.length; i++) {
    const [y, x] = position[i].split(' ').map(Number);
    dist[x][y] = 1;
  }

  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visit[i][j]) continue;
      queue.push([i, j]);
      visit[i][j] = 1;
      let count = 0;
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (!dist[x][y]) continue;
        count += 1;
        for (const [dir_x, dir_y] of dir) {
          const nx = dir_x + x;
          const ny = dir_y + y;
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (visit[nx][ny]) continue;
          queue.push([nx, ny]);
          visit[nx][ny] = 1;
        }
      }
      if (count !== 0) result += 1;
    }
  }

  return result;
}
