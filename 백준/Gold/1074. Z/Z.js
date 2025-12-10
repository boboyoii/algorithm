const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const [N, r, c] = input.split(' ').map(Number);

function solution(N, r, c) {
  if (N === 0) return 0;
  const half = 2 ** (N - 1);
  if (r < half && c < half) return solution(N - 1, r, c);
  if (r < half && c >= half) return half * half + solution(N - 1, r, c - half);
  if (r >= half && c < half)
    return 2 * half * half + solution(N - 1, r - half, c);
  return 3 * half * half + solution(N - 1, r - half, c - half);
}

console.log(solution(N, r, c));
