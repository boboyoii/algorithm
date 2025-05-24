function solution(input) {
  const alphabet = Array.from({ length: 26 }, () => 0);

  input.split('').forEach((char) => {
    alphabet[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  });

  return alphabet.join(' ');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(solution(input));
