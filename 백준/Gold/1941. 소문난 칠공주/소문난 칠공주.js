const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const seatMap = input.map((line) => line.split(''));

const select = [];
let count = 0;

function solution(k, start, y_count) {
  if (y_count > 3) return;
  if (k === 7) {
    if (isConnected([...select])) count += 1;
    return;
  }

  for (let i = start; i < 25; i++) {
    const x = Math.floor(i / 5);
    const y = i % 5;

    select.push([x, y]);
    if (seatMap[x][y] === 'Y') solution(k + 1, i + 1, y_count + 1);
    else solution(k + 1, i + 1, y_count);
    select.pop();
  }
}

function isConnected(select) {
  const queue = [];
  const visit = Array.from({ length: 5 }, () => Array(5).fill(false));
  const isSelected = Array.from({ length: 5 }, () => Array(5).fill(false));

  select.forEach(([r, c]) => {
    isSelected[r][c] = true;
  });

  const [startX, startY] = select[0];
  queue.push([startX, startY]);
  visit[startX][startY] = true;
  let count = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    count += 1;

    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (visit[nx][ny] || !isSelected[nx][ny]) continue;
      queue.push([nx, ny]);
      visit[nx][ny] = true;
    }
  }

  return count === 7;
}

solution(0, 0, 0);
console.log(count);
