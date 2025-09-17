function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);

  const A = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const B = input[2]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i] <= B[j]) break;
      count++;
    }
  }

  return count;
}

function main() {
  const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

  const T = input[0];
  const result = [];
  for (let i = 1; i < 3 * T; i += 3)
    result.push(solution(input.slice(i, i + 3)));

  console.log(result.join('\n'));
}

main();
