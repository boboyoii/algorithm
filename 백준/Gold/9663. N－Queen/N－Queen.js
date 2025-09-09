const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const N = Number(input);
const isused1 = Array.from({ length: N }, () => false);
const isused2 = Array.from({ length: N * 2 - 1 }, () => false);
const isused3 = Array.from({ length: N * 2 - 1 }, () => false);

let cnt = 0;

solution(0);
console.log(cnt);

function solution(cur) {
  if (cur == N) {
    cnt++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isused1[i] || isused2[cur + i] || isused3[cur - i + N - 1]) continue;

    isused1[i] = true;
    isused2[cur + i] = true;
    isused3[cur - i + N - 1] = true;
    solution(cur + 1);
    isused1[i] = false;
    isused2[cur + i] = false;
    isused3[cur - i + N - 1] = false;
  }
}
