function solution(N) {
  let D = Array.from({ length: N + 1 }, (x) => 0);

  for (let i = 2; i <= N; i++) {
    D[i] = D[i - 1] + 1;
    if (i % 2 === 0) D[i] = Math.min(D[i], D[i / 2] + 1);
    if (i % 3 === 0) D[i] = Math.min(D[i], D[i / 3] + 1);
  }

  return D[N];
}

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

console.log(solution(input));
