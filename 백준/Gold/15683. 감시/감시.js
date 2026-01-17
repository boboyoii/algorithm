const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const officeMap = input.slice(1).map((line) => line.split(' ').map(Number));

const cctvPos = [];
let ccrtvCnt = 0;
let blindSpot = Infinity;

officeMap.forEach((row, x) => {
  row.forEach((item, y) => {
    if (item === 0 || item === 6) return;
    cctvPos.push([x, y]);
    ccrtvCnt += 1;
  });
});

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function solution(k, officeMap) {
  if (k === ccrtvCnt) {
    const count = countByBlindSpot(officeMap);
    if (count < blindSpot) blindSpot = count;
    return;
  }

  const [x, y] = cctvPos[k];
  const type = officeMap[x][y];

  if (type === 1) {
    for (let i = 0; i < 4; i++) {
      const newOfficeMap = officeMap.map((row) => [...row]);
      fillLine([x, y], dirs[i], newOfficeMap);

      solution(k + 1, newOfficeMap);
    }
  } else if (type === 2) {
    for (let i = 0; i < 2; i++) {
      const newOfficeMap = officeMap.map((row) => [...row]);
      fillLine([x, y], dirs[i], newOfficeMap);
      fillLine([x, y], dirs[i + 2], newOfficeMap);

      solution(k + 1, newOfficeMap);
    }
  } else if (type === 3) {
    for (let i = 0; i < 4; i++) {
      const newOfficeMap = officeMap.map((row) => [...row]);
      fillLine([x, y], dirs[i], newOfficeMap);
      fillLine([x, y], dirs[(i + 1) % 4], newOfficeMap);

      solution(k + 1, newOfficeMap);
    }
  } else if (type === 4) {
    for (let i = 0; i < 4; i++) {
      const newOfficeMap = officeMap.map((row) => [...row]);
      fillLine([x, y], dirs[i], newOfficeMap);
      fillLine([x, y], dirs[(i + 1) % 4], newOfficeMap);
      fillLine([x, y], dirs[(i + 2) % 4], newOfficeMap);

      solution(k + 1, newOfficeMap);
    }
  } else if (type === 5) {
    const newOfficeMap = officeMap.map((row) => [...row]);
    for (let i = 0; i < 4; i++) fillLine([x, y], dirs[i], newOfficeMap);

    solution(k + 1, newOfficeMap);
  }
}

function countByBlindSpot(officeMap) {
  return officeMap.reduce(
    (count, row) => count + row.filter((item) => item === 0).length,
    0
  );
}

function fillLine(base, dir, officeMap) {
  const [x, y] = base;
  const [dirx, diry] = dir;

  let nx = x + dirx;
  let ny = y + diry;

  while (nx >= 0 && nx < N && ny >= 0 && ny < M) {
    if (officeMap[nx][ny] === 6) break;
    if (officeMap[nx][ny] === 0) officeMap[nx][ny] = '#';

    nx += dirx;
    ny += diry;
  }

  return officeMap;
}

solution(0, officeMap);

console.log(blindSpot);
