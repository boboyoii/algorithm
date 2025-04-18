function solution(data) {
  const testCases = data.slice(1).map((v) => v.split(''));

  const scores = [];

  for (const testCase of testCases) {
    let unit = 0;
    let score = 0;
    for (let i = 0; i < testCase.length; i++) {
      if (testCase[i] === 'O') unit += 1;
      else unit = 0;
      score += unit;
    }
    scores.push(score);
  }

  return scores.join('\n');
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(data));
