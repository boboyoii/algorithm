function solution(data) {
  const input = data.split('\n');
  const logCount = Number(input[0]);
  const log = input.slice(1);

  const atWork = new Set();

  for (let i = 0; i < logCount; i++) {
    const [name, state] = log[i].split(' ');
    if (state === 'enter') atWork.add(name);
    else if (state === 'leave') atWork.delete(name);
  }

  return Array.from(atWork).sort().reverse().join('\n');
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(data));
