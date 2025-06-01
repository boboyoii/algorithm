const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(input) {
  const N = +input[0];
  const homes = input.slice(1).map((v) => v.split('').map(Number));
  const visit = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  let complexes = [];
  let extent;
  let idx;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const queue = [];

      if (visit[row][col]) continue;

      queue.push([row, col]);
      visit[row][col] = true;

      if (homes[row][col] === 0) continue;
      extent = 0;
      idx = 0;
      while (queue.length > idx) {
        const [x, y] = queue[idx++];

        if (homes[x][y] === 0) continue;
        extent += 1;

        for (const [dx, dy] of dirs) {
          const nX = x + dx;
          const nY = y + dy;
          if (nX < 0 || nX >= N) continue;
          if (nY < 0 || nY >= N) continue;
          if (visit[nX][nY]) continue;

          queue.push([nX, nY]);
          visit[nX][nY] = true;
        }
      }
      complexes.push(extent);
    }
  }

  console.log(complexes.length);
  complexes.sort((a, b) => a - b);
  for (const complex of complexes) console.log(complex);
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
