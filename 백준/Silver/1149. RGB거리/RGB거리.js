function solution(input) {
  const N = input[0];
  const rgbCosts = input.slice(1);
  let D = rgbCosts;

  for (let i = 1; i < N; i++) {
    D[i][0] += Math.min(D[i - 1][1], D[i - 1][2]);
    D[i][1] += Math.min(D[i - 1][0], D[i - 1][2]);
    D[i][2] += Math.min(D[i - 1][0], D[i - 1][1]);
  }

  return Math.min(...D[N - 1]);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

console.log(solution(input));
