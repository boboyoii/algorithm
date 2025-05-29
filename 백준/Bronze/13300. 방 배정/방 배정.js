function solution(input) {
  const k = +input[0].split(' ')[1];
  const room = Array.from({ length: 6 }, () => [[], []]);
  let count = 0;
  const students = input.slice(1);
  for (let i = 0; i < students.length; i++) {
    const [S, Y] = students[i].split(' ');
    if (room[Y - 1][S].length === 0) count++;
    room[Y - 1][S].push('1');
    if (room[Y - 1][S].length === k) room[Y - 1][S].length = 0;
  }
  return count;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
