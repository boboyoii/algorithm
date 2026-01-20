const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const triangle = Array.from({ length: n }, () => []);
for (let i = 1; i <= n; i++) {
  triangle[i - 1].push(...input[i].split(' ').map(Number));
}

function solution(n, triangle) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let left = j === 0 ? 0 : triangle[i - 1][j - 1];
      let right = j === triangle[i].length - 1 ? 0 : triangle[i - 1][j];
      triangle[i][j] += Math.max(left, right);
    }
  }

  return Math.max(...triangle[n - 1]);
}

console.log(solution(n, triangle));
