function solution(input) {
  const N = input;
  const D = Array.from({ length: N }, () => 0);
  D[0] = 1;
  D[1] = 2;

  for (let i = 2; i < N; i++) D[i] = (D[i - 1] + D[i - 2]) % 10007;

  return D[N - 1];
}

const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
