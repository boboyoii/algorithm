const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
];

function solution(input) {
  let test = 0;
  while (true) {
    let [w, h] = input[test].split(' ').map(Number);
    if (w === 0 && h === h) break;
    test += 1;
    const square = input
      .slice(test, test + h)
      .map((v) => v.split(' ').map(Number));
    const visit = Array.from({ length: h }, () =>
      Array.from({ length: w }, () => false)
    );
    let landCount = 0;

    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        if (visit[row][col]) continue;
        const queue = [];
        queue.push([row, col]);
        visit[row][col] = true;
        let isLand = false;
        let idx = 0;
        while (queue.length > idx) {
          const [x, y] = queue[idx++];
          if (square[x][y] === 0) continue;
          if (!isLand) isLand = true;

          for (const [dx, dy] of dirs) {
            const nX = x + dx;
            const nY = y + dy;

            if (nX < 0 || nX >= h || nY < 0 || nY >= w) continue;
            if (visit[nX][nY]) continue;
            queue.push([nX, nY]);
            visit[nX][nY] = true;
          }
        }
        if (isLand) landCount += 1;
      }
    }
    console.log(landCount);
    test += h;
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
