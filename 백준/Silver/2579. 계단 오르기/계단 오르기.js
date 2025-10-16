function solution(input) {
  const N = input[0];
  const stairs = input.slice(1);
  const D = Array.from({ length: N }, (x) => [0, 0]);

  if (N === 1) return stairs[0];
  D[0][0] = stairs[0];
  D[0][1] = stairs[0];
  D[1][0] = stairs[1];
  D[1][1] = D[0][0] + stairs[1];

  for (let i = 2; i < N; i++) {
    D[i][0] = Math.max(D[i - 2][0], D[i - 2][1]) + stairs[i];
    D[i][1] = D[i - 1][0] + stairs[i];
  }

  return Math.max(D[N - 1][0], D[N - 1][1]);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input));
