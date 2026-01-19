const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];

function lcm(A, B) {
  let a = A;
  let b = B;
  let k = 2;
  while (k <= a && k <= b) {
    if (a % k !== 0 || b % k !== 0) {
      k += 1;
      continue;
    }

    a /= k;
    b /= k;
  }

  return a * B;
}

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(lcm(a, b));
}
