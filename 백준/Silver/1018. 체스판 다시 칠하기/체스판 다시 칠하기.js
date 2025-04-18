function solution(data) {
  const [M, N] = data[0].split(' ').map(Number);
  const board = data.slice(1);
  let min = 2501;

  const wstart = 'WBWBWBWB';
  const bstart = 'BWBWBWBW';

  for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
      let wStartCount = 0;
      let bStartCount = 0;
      for (let k = i; k < i + 8; k++) {
        if ((k - i) % 2 === 0) {
          wStartCount += [...board[k].substr(j, 8)].reduce(
            (acc, curr, idx) => (curr !== wstart[idx] ? (acc += 1) : acc),
            0
          );
          bStartCount += [...board[k].substr(j, 8)].reduce(
            (acc, curr, idx) => (curr !== bstart[idx] ? (acc += 1) : acc),
            0
          );
        } else {
          wStartCount += [...board[k].substr(j, 8)].reduce(
            (acc, curr, idx) => (curr !== bstart[idx] ? (acc += 1) : acc),
            0
          );
          bStartCount += [...board[k].substr(j, 8)].reduce(
            (acc, curr, idx) => (curr !== wstart[idx] ? (acc += 1) : acc),
            0
          );
        }
      }
      if (wStartCount < min || bStartCount < min)
        min = Math.min(wStartCount, bStartCount);
    }
  }

  return min;
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(data));
