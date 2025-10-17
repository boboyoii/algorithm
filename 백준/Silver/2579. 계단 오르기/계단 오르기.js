function solution(input) {
  const N = input[0];
  const stairs = input.slice(1);
  const D = Array.from({ length: N }, () => 0);
  const total = stairs.reduce((acc, score) => acc + score, 0);

  if (N < 3) return total;

  for (let i = 0; i < N - 1; i++) {
    if (i - 3 < 0) {
      D[i] = stairs[i];
      continue;
    }
    D[i] = Math.min(D[i - 2], D[i - 3]) + stairs[i];
  }

  return total - Math.min(D[N - 2], D[N - 3]);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input));
