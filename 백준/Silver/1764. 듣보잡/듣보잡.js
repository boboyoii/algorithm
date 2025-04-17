function solution(data) {
  const seen = new Set();
  const dup = new Set();

  for (const name of data.slice(1)) {
    if (seen.has(name)) dup.add(name);
    else seen.add(name);
  }

  dup.add(dup.size);

  return [...dup].sort().join('\n');
}

const data = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(data));
