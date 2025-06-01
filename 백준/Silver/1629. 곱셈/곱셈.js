function solution(input) {
  const [A, B, C] = input.split(' ').map(BigInt);
  return mul(A, B, C).toString();
}

function mul(a, b, mod) {
  if (b === 1n) return a % mod;
  const half = mul(a, b / 2n, mod);
  const result = (half * half) % mod;
  return b % 2n === 0n ? result : (result * a) % mod;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(input));
