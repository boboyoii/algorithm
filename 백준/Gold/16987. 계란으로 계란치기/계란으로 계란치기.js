const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const strength = new Array(N);
const weight = new Array(N);

for (let i = 0; i < N; i++) {
  const [d, w] = input[i + 1].split(' ').map(Number);
  strength[i] = d;
  weight[i] = w;
}

let max = 0;

function solution(k, count, strength) {
  if (k === N) {
    if (count > max) max = count;
    return;
  }

  if (strength[k] <= 0) {
    solution(k + 1, count, strength);
    return;
  }

  let hit = false;

  for (let i = 0; i < N; i++) {
    if (k === i || strength[i] <= 0) continue;

    hit = true;
    const new_strength = [...strength];
    let new_count = count;

    new_strength[k] -= weight[i];
    new_strength[i] -= weight[k];

    if (new_strength[k] <= 0) new_count += 1;
    if (new_strength[i] <= 0) new_count += 1;

    solution(k + 1, new_count, new_strength);
  }

  if (!hit) {
    solution(k + 1, count, strength);
  }
}

solution(0, 0, strength);

console.log(max);
