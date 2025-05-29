function solution(input1, input2) {
  const str1 = [...input1].sort();
  const str2 = [...input2].sort();

  let p1 = 0;
  let p2 = 0;
  let del = 0;
  while (true) {
    if (str1[p1] === str2[p2]) {
      p1++;
      p2++;
    } else if (str1[p1] > str2[p2]) {
      del++;
      p2++;
    } else {
      del++;
      p1++;
    }
    if (p1 === str1.length || p2 === str2.length) break;
  }

  del += str1.length - p1 + (str2.length - p2);
  return del;
}

const [input1, input2] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input1, input2));
