function solution(input) {
  const compareStrs = input.slice(1);
  const result = [];
  compareStrs.forEach((str) => {
    const [str1, str2] = str.split(' ');
    if (str1.length !== str2.length) return result.push('Impossible');
    const charCount = {};
    [...str1].forEach((char) => {
      if (!(char in charCount)) charCount[char] = 1;
      else charCount[char]++;
    });

    let isPossible = true;
    for (const char of str2) {
      if (!charCount[char] || charCount[char] === 0) {
        isPossible = false;
        break;
      }
      charCount[char]--;
    }

    result.push(isPossible ? 'Possible' : 'Impossible');
  });

  return result.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
