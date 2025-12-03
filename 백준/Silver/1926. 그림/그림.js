const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(Number);
const paperMap = input.slice(1).map((line) => line.split(' '));

function solution(m, n, paperMap) {
  const visit = Array.from({ length: m }, () => Array(n).fill(false));
  const queue = [];
  const areaList = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visit[i][j]) {
        queue.push([i, j]);
        visit[i][j] = true;
      }
      let areas = 0;

      while (queue.length !== 0) {
        const [x, y] = queue.shift();
        if (paperMap[x][y] == '0') continue;
        areas += 1;

        if (x - 1 > -1 && !visit[x - 1][y]) {
          queue.push([x - 1, y]);
          visit[x - 1][y] = true;
        }
        if (x + 1 < m && !visit[x + 1][y]) {
          queue.push([x + 1, y]);
          visit[x + 1][y] = true;
        }
        if (y - 1 > -1 && !visit[x][y - 1]) {
          queue.push([x, y - 1]);
          visit[x][y - 1] = true;
        }
        if (y + 1 < n && !visit[x][y + 1]) {
          queue.push([x, y + 1]);
          visit[x][y + 1] = true;
        }
      }

      if (areas !== 0) areaList.push(areas);
    }
  }

  if (areaList.length === 0) return [0, 0];
  return [areaList.length, Math.max(...areaList)];
}

const [count, maxArea] = solution(m, n, paperMap);
console.log(count);
console.log(maxArea);
