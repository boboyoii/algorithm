const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const board1 = Array.from({ length: N }, () => Array(M).fill(0));
const board2 = Array.from({ length: N }, () => Array(M).fill(0));

function solution(sticker, R, C, count) {
  let possible = false;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      init();
      possible = attach(sticker, x, y, R, C);

      if (possible) break;
    }
    if (possible) break;
  }

  if (possible) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        board1[i][j] = board2[i][j];
      }
    }
    return;
  }

  if (count > 3) return;

  const newSticker = Array.from({ length: C }, () => Array(R).fill(0));
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      newSticker[j][R - i - 1] = sticker[i][j];
    }
  }

  solution(newSticker, C, R, count + 1);
}

function init() {
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) board2[i][j] = board1[i][j];
}

function attach(sticker, x, y, R, C) {
  let possible = true;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (sticker[i][j] === 0) continue;

      if (i + x >= N || j + y >= M || board2[i + x][j + y] === 1) {
        possible = false;
        break;
      }
      board2[i + x][j + y] = 1;
    }

    if (!possible) break;
  }

  return possible;
}

function countByFill() {
  return board1.reduce(
    (acc, row) => row.filter((val) => val === 1).length + acc,
    0
  );
}

let num = 1;
for (let i = 0; i < K; i++) {
  const [R, C] = input[num++].split(' ').map(Number);
  const sticker = input
    .slice(num, num + R)
    .map((line) => line.split(' ').map(Number));

  solution(sticker, R, C, 1);

  num += R;
}

console.log(countByFill());
