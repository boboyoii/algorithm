const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const t = [];
const p = [];

for (let i = 1; i < n + 1; i++) {
  const [time, price] = input[i].split(' ').map(Number);
  t.push(time);
  p.push(price);
}

function solution(n, t, p) {
  let dp = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    if (i + t[i] > n) {
      dp[i] = dp[i + 1];
      continue;
    }

    dp[i] = Math.max(dp[i + 1], p[i] + dp[i + t[i]]);
  }

  return dp[0];
}

console.log(solution(n, t, p));
