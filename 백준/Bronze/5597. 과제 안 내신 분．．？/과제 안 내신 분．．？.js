const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const submit = Array(31).fill(false);

  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    submit[num] = true;
  }

  const notSubmitted = submit
    .map((num, idx) => {
      if (idx === 0) return null;
      if (num === true) return null;
      return idx;
    })
    .filter((val) => val !== null)
    .sort((a, b) => a - b);

  return notSubmitted.join('\n');
}

console.log(solution(input));
