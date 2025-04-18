function solution(N) {
  let array = [...new Array(N)].map((_, i) => N - i);
  const temp = [];
  let discard = true;

  while (array.length > 1) {
    while (array.length > 0) {
      if (discard) {
        array.pop();
        discard = false;
      }
      if (array.length !== 0 && !discard) {
        temp.push(array.pop());
        discard = true;
      }
    }
    array = [...temp].reverse();
    temp.length = 0;
  }

  return array[0];
}

const N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(N));
