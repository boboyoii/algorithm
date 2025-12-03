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

const [R, C] = input[0].split(' ').map(Number);
const mazeMap = input.slice(1).map((line) => line.split(''));

function solution(R, C, mazeMap) {
  const jMap = Array.from({ length: R }, () => Array(C).fill(-1));
  const fMap = Array.from({ length: R }, () => Array(C).fill(-1));
  const jQueue = [];
  const fQueue = [];
  let escapeTime = 'IMPOSSIBLE';

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (mazeMap[i][j] === 'F') {
        fQueue.push([i, j]);
        fMap[i][j] = 'F';
      } else if (mazeMap[i][j] === 'J') {
        jQueue.push([i, j]);
        jMap[i][j] = 0;
      }
    }
  }

  let fIndex = 0;
  let jIndex = 0;

  while (jQueue.length > jIndex) {
    // 불이 확산
    const currentFSize = fQueue.length;
    while (currentFSize > fIndex) {
      const [fx, fy] = fQueue[fIndex++];
      for (let i = 0; i < 4; i++) {
        const nfx = fx + dir[i][0];
        const nfy = fy + dir[i][1];
        if (nfx < 0 || nfx >= R || nfy < 0 || nfy >= C) continue;
        if (mazeMap[nfx][nfy] === '#') continue;
        if (fMap[nfx][nfy] !== -1) continue;
        fMap[nfx][nfy] = 'F';
        fQueue.push([nfx, nfy]);
      }
    }

    // 지훈 이동
    const currentJSize = jQueue.length;
    while (currentJSize > jIndex) {
      const [jx, jy] = jQueue[jIndex++];
      if (jx === 0 || jx === R - 1 || jy === 0 || jy === C - 1) {
        escapeTime = jMap[jx][jy] + 1;
        break;
      }
      const currentTime = jMap[jx][jy];
      for (let i = 0; i < 4; i++) {
        const njx = jx + dir[i][0];
        const njy = jy + dir[i][1];
        if (njx < 0 || njx >= R || njy < 0 || njy >= C) continue;
        if (mazeMap[njx][njy] === '#') continue;
        if (fMap[njx][njy] === 'F') continue;
        if (jMap[njx][njy] !== -1) continue;
        jMap[njx][njy] = currentTime + 1;
        jQueue.push([njx, njy]);
      }
    }

    if (escapeTime !== 'IMPOSSIBLE') break;
  }

  return escapeTime;
}

console.log(solution(R, C, mazeMap));
