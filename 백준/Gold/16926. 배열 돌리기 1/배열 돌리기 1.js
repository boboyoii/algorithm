function solution(input) {
  const [N, M, R] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map((v) => v.split(' ').map(Number));

  for (let row = 0, col = 0; row < N / 2 && col < M / 2; row++, col++) {
    const queue = [];
    let nRow = row;
    let nCol = col;
    let dir = 'down';

    while (true) {
      queue.push(arr[nRow][nCol]);

      if (dir === 'down') {
        if (nRow + 1 < N - row) nRow += 1;
        else dir = 'right';
      }
      if (dir === 'right') {
        if (nCol + 1 < M - col) nCol += 1;
        else dir = 'up';
      }
      if (dir === 'up') {
        if (nRow - 1 > -1 + row) nRow -= 1;
        else dir = 'left';
      }
      if (dir === 'left') {
        if (nCol - 1 > -1 + col) nCol -= 1;
        else dir = 'down';
      }

      if (nRow === row && nCol === col) break;
    }

    let pos = queue.length - (R % queue.length);
    if (R % queue.length === 0) pos = 0;
    let x = row;
    let y = col;

    dir = 'down';
    for (let i = 0; i < queue.length; i++) {
      arr[x][y] = queue[pos++];
      pos %= queue.length;

      if (dir === 'down') {
        if (x + 1 < N - row) x += 1;
        else dir = 'right';
      }
      if (dir === 'right') {
        if (y + 1 < M - col) y += 1;
        else dir = 'up';
      }
      if (dir === 'up') {
        if (x - 1 > -1 + row) x -= 1;
        else dir = 'left';
      }
      if (dir === 'left') {
        if (y - 1 > -1 + col) y -= 1;
        else dir = 'down';
      }
    }
  }

  return arr.map((v) => v.join(' ')).join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
