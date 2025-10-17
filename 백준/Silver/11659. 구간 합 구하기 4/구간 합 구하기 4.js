function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  const ranges = input.slice(2).map((v) => v.split(" ").map(Number));

  const result = [];

  const D = Array.from({ length: N + 1 }, (v, i) => {
    if (i === 0) return 0;
    return nums[i - 1];
  });

  for (let i = 1; i <= N; i++) D[i] += D[i - 1];

  for (const range of ranges) {
    const i = range[0];
    const j = range[1];
    result.push(D[j] - D[i - 1]);
  }

  return result.join("\n");
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
