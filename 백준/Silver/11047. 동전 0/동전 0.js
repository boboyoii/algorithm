const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

function solution(N, K, coins) {
  let totalCount = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (coins[i] > K) continue;
    if (K <= 0) break;

    const count = Math.floor(K / coins[i]);
    totalCount += count;
    K -= count * coins[i];
  }

  return totalCount;
}

console.log(solution(N, K, coins));
