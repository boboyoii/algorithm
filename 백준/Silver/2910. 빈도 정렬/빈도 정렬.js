const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const nums = input[1].split(' ');
  const count = {};
  const firstIndex = {};

  nums.forEach((num, idx) => {
    count[num] = (count[num] || 0) + 1;
    if (count[num] === 1) firstIndex[num] = idx;
  });

  const sortedKeys = Object.keys(count).sort((a, b) => {
    if (count[a] != count[b]) return count[b] - count[a];

    return firstIndex[a] - firstIndex[b];
  });

  const result = [];

  for (const num of sortedKeys) {
    for (let i = 0; i < count[num]; i++) result.push(num);
  }

  return result.join('\n');
}

console.log(solution(input));
