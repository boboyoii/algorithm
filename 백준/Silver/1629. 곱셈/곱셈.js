const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const [A, B, C] = input.split(' ').map(BigInt);

function solution(B) {
  if (B === 1n) return A % C;
  const val = solution(B / 2n);
  if (B % 2n === 0n) return (val * val) % C;
  else return (val * val * A) % C;
}

const result = solution(B);
console.log(String(result));
