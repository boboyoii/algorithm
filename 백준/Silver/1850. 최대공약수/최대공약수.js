const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function minBigInt(...args) {
  return args.reduce((m, e) => (e < m ? e : m));
}

function gcd(a, b) {
  while (b != 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return Number(a);
}

const [a, b] = input.split(' ').map(BigInt);
console.log('1'.repeat(gcd(a, b)));
