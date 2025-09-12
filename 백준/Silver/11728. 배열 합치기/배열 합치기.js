const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function mergeArr(a, b) {
  const sortArr = [];
  let a_idx = 0;
  let b_idx = 0;

  while (a_idx < a.length && b_idx < B.length) {
    if (a[a_idx] <= b[b_idx]) sortArr.push(a[a_idx++]);
    else sortArr.push(b[b_idx++]);
  }

  if (a_idx < a.length) sortArr.push(...a.slice(a_idx));

  if (b_idx < b.length) sortArr.push(...b.slice(b_idx));

  return sortArr.join(' ');
}

console.log(mergeArr(A, B));
