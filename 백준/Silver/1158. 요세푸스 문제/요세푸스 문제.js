function solution(input) {
  const [N, K] = input.split(' ').map(Number);

  const next = Array.from({ length: N + 1 }, (_, idx) => {
    if (idx === 0) return -1;
    if (idx === N) return 1;
    return idx + 1;
  });
  const before = Array.from({ length: N + 1 }, (_, idx) => {
    if (idx === 0) return -1;
    if (idx === 1) return N;
    return idx - 1;
  });
  let pos = 1;
  const josephus = [];
  while (next[pos] !== -1) {
    for (let i = 1; i < K; i++) pos = next[pos];
    josephus.push(pos);

    const nextPos = next[pos];

    next[before[pos]] = next[pos];
    before[next[pos]] = before[pos];
    next[pos] = -1;
    before[pos] = -1;

    pos = nextPos;
  }
  return `<${josephus.join(', ')}>`;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(input));
