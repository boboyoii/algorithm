const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function numSort(numbers) {
  const count = new Array(2000001).fill(0);

  for (const number of numbers) count[number + 1000000]++;

  const result = [];

  for (let i = 0; i < 2000001; i++) {
    for (let j = 0; j < count[i]; j++) result.push(i - 1000000);
  }

  return result.join('\n');
}

const nums = input.slice(1).map(Number);

console.log(numSort(nums));
