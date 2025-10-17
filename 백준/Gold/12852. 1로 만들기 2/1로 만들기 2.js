function solution(input) {
  const N = input;
  const D = [0, { next: -1, count: 0 }];

  for (let i = 2; i <= N; i++) {
    D.push({ next: i - 1, count: D[i - 1].count + 1 });
    if (i % 2 === 0 && D[i / 2].count < D[i].count) {
      D[i].next = i / 2;
      D[i].count = D[i / 2].count + 1;
    }
    if (i % 3 === 0 && D[i / 3].count < D[i].count) {
      D[i].next = i / 3;
      D[i].count = D[i / 3].count + 1;
    }
  }

  const status = [];
  let current = N;

  for (let i = D[N].count; i >= 0; i--) {
    status.push(current);
    current = D[current].next;
  }

  const result = [];
  result.push(D[N].count);
  result.push(status.join(" "));

  return result.join("\n");
}

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
