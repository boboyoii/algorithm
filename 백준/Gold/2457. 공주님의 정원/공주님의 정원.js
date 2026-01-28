const DATE = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const flowers = [];

for (let i = 1; i < N + 1; i++) {
  const [startMonth, startDate, endMonth, endDate] = input[i]
    .split(' ')
    .map(Number);
  flowers.push([startMonth * 100 + startDate, endMonth * 100 + endDate]);
}

flowers.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return b[1] - a[1];
});

function solution(N, flowers) {
  const START = 301;
  const END = 1201;

  let cur = START;
  let idx = 0;
  let count = 0;

  while (cur < END) {
    let maxEnd = cur;

    while (idx < N && flowers[idx][0] <= cur) {
      if (flowers[idx][1] >= maxEnd) maxEnd = flowers[idx][1];
      idx++;
    }

    if (maxEnd === cur) return 0;

    cur = maxEnd;
    count++;
  }

  if (cur < END) return 0;

  return count;
}

console.log(solution(N, flowers));
