const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const n = +input;

function solution(n) {
  let dp = Array.from({ length: n }, (_, digit) => {
    if (digit === 0)
      return Array.from({ length: 11 }, (_, idx) => {
        if (idx === 0 || idx === 10) return 0;
        return 1;
      });
    return Array(11).fill(0);
  });

  if (n === 1) return dp[0].reduce((acc, val) => val + acc, 0);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = dp[i - 1][j + 1] + ((dp[i - 1][j - 1] ?? 0) % 1000000000);
    }
  }

  return dp[n - 1].reduce((acc, val) => (val + acc) % 1000000000, 0);
}

console.log(solution(n));
