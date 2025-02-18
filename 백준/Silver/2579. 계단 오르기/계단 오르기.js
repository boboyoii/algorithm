const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const step = input[0];
let stairs = input.slice(1);
stairs.unshift(0);
const score = Array.from({ length: step + 1 }, () => 0);

score[1] = stairs[1];
score[2] = stairs[1] + stairs[2];

for (let i = 3; i < score.length; i++) {
  score[i] = Math.max(
    score[i - 2] + stairs[i],
    score[i - 3] + stairs[i - 1] + stairs[i]
  );
}

console.log(score[step]);
