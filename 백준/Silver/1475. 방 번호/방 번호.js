function solution(N) {
  const count = Array.from({ length: 10 }, () => 0);

  while (N !== 0) {
    let value = N % 10;
    if (value === 9) value = 6;
    count[value]++;
    N = Math.floor(N / 10);
  }
  count[6] = Math.ceil(count[6] / 2);

  return Math.max(...count);
}

const N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(N));
