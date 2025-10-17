function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  const ranges = input.slice(2).map((v) => v.split(" ").map(Number));

  const result = [];

  const D = Array.from({ length: N }, (v, i) => nums[i]);

  for (let i = 1; i < N; i++) D[i] += D[i - 1];

  for (const range of ranges) {
    const i = range[0] - 1;
    const j = range[1] - 1;
    if (i === 0) result.push(D[j]);
    else result.push(D[j] - D[i - 1]);
  }

  return result.join("\n");
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
