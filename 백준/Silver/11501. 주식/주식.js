function solution(N, stockPrices) {
  let benefit = 0n;
  let maxPrice = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (maxPrice < stockPrices[i]) {
      maxPrice = stockPrices[i];
      continue;
    }
    benefit += BigInt(maxPrice - stockPrices[i]);
  }

  return benefit.toString();
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
let line = 1;
for (let i = 0; i < T; i++) {
  const N = +input[line++];
  const stockPrices = input[line++].split(' ').map(Number);
  console.log(solution(N, stockPrices));
}
