const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cityMap = input.slice(1).map((line) => line.split(' ').map(Number));

const house = [];
const chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (cityMap[i][j] === 1) house.push([i, j]);
    else if (cityMap[i][j] === 2) chicken.push([i, j]);
  }
}

const houseToChicken = Array.from({ length: house.length }, () =>
  Array(chicken.length).fill(0)
);
for (let i = 0; i < house.length; i++) {
  for (let j = 0; j < chicken.length; j++) {
    const [r1, c1] = house[i];
    const [r2, c2] = chicken[j];
    houseToChicken[i][j] = Math.abs(r1 - r2) + Math.abs(c1 - c2);
  }
}

let min = Infinity;
const distnaces = Array(house.length).fill(Infinity);
const used = Array(chicken.length).fill(0);

function solution(k, start, distnaces) {
  if (k === M) {
    const sum = distnaces.reduce((acc, distnace) => acc + distnace, 0);
    min = Math.min(min, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    if (used[i]) continue;

    const new_distances = [...distnaces];
    for (let j = 0; j < distnaces.length; j++)
      new_distances[j] = Math.min(new_distances[j], houseToChicken[j][i]);
    used[i] = 1;

    solution(k + 1, i + 1, new_distances);
    used[i] = 0;
  }
}

solution(0, 0, distnaces);
console.log(min);
