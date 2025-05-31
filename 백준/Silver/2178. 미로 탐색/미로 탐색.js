function solution(input) {
  const maze = input.slice(1).map((v) => v.split(''));
  const visit = Array.from({ length: maze.length }, () =>
    Array.from({ length: maze[0].length }, () => false)
  );

  const queue = [];
  queue.push({ pos: [0, 0], extent: 1 });

  while (queue.length !== 0) {
    const can = queue.shift();
    const [x, y] = can.pos;

    if (x === maze.length - 1 && y === maze[0].length - 1) {
      return can.extent;
    }
    if (visit[x][y]) continue;
    visit[x][y] = true;

    if (x - 1 > -1 && !visit[x - 1][y] && maze[x - 1][y] === '1')
      queue.push({ pos: [x - 1, y], extent: can.extent + 1 });
    if (x + 1 < maze.length && !visit[x + 1][y] && maze[x + 1][y] === '1')
      queue.push({ pos: [x + 1, y], extent: can.extent + 1 });
    if (y - 1 > -1 && !visit[x][y - 1] && maze[x][y - 1] === '1')
      queue.push({ pos: [x, y - 1], extent: can.extent + 1 });
    if (y + 1 < maze[0].length && !visit[x][y + 1] && maze[x][y + 1] === '1')
      queue.push({ pos: [x, y + 1], extent: can.extent + 1 });
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
