function solution(N) {
  let count = 0;
  let apocNum = 666;

  while (true) {
    if (String(apocNum).includes('666')) {
      count++;
    }
    if (count === N) break;
    apocNum++;
  }

  return apocNum;
}

const N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(N));
