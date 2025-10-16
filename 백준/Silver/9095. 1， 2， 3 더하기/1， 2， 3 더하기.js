function solution(n) {
  let D = Array.from({ length: n + 1 }, (x) => 0);

  D[1] = 1;

  for (let i = 2; i <= n; i++) {
    D[i] += D[i - 1];
    if (i - 2 > 0) D[i] += D[i - 2];
    if (i - 3 > 0) D[i] += D[i - 3];
    if (i <= 3) D[i] += 1;
  }

  return D[n];
}

function main() {
  const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const T = +input[0];
  const n = input.slice(1);
  const results = [];

  for (let i = 0; i < T; i++) {
    const result = solution(n[i]);
    results.push(result);
  }

  console.log(results.join("\n"));
}

main();
