const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const array = input[1].split(' ').map(Number);

function solution(n, arr) {
  const D = arr.map((val) => ({ last: val, length: 1 }));

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (D[j].last >= arr[i]) continue;
      if (D[j].length < D[i].length) continue;
      D[i].length = D[j].length + 1;
    }
  }

  return Math.max(...D.map((val) => val.length));
}

console.log(solution(n, array));
