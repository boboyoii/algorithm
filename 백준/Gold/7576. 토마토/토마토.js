function solution(input) {
  const [M, N] = input[0].split(' ').map(Number);
  const tomatos = input.slice(1).map((v) => v.split(' ').map(Number));
  const visit = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  const queue = [];

  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      if (tomatos[i][j] === 1) {
        queue.push({ pos: [i, j], date: 1 });
        visit[i][j] = true;
      }

  let idx = 0;
  while (queue.length > idx) {
    const tomato = queue[idx];
    idx += 1;
    const [x, y] = tomato.pos;

    if (tomatos[x][y] === 0 || tomatos[x][y] > tomato.date)
      tomatos[x][y] = tomato.date;
    if (x - 1 > -1 && tomatos[x - 1][y] !== -1 && !visit[x - 1][y]) {
      queue.push({ pos: [x - 1, y], date: tomato.date + 1 });
      visit[x - 1][y] = true;
    }

    if (x + 1 < N && tomatos[x + 1][y] !== -1 && !visit[x + 1][y]) {
      queue.push({ pos: [x + 1, y], date: tomato.date + 1 });
      visit[x + 1][y] = true;
    }

    if (y - 1 > -1 && tomatos[x][y - 1] !== -1 && !visit[x][y - 1]) {
      queue.push({ pos: [x, y - 1], date: tomato.date + 1 });
      visit[x][y - 1] = true;
    }
    if (y + 1 < M && tomatos[x][y + 1] !== -1 && !visit[x][y + 1]) {
      queue.push({ pos: [x, y + 1], date: tomato.date + 1 });
      visit[x][y + 1] = true;
    }
  }

  let maxDate = 0;

  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      if (tomatos[i][j] === 0) return -1;
      if (tomatos[i][j] > maxDate) maxDate = tomatos[i][j];
    }

  return maxDate - 1;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
