function solution(input) {
  const compareStrs = input.slice(1);
  const result = [];
  compareStrs.forEach((str) => {
    const [str1, str2] = str.split(' ');
    if (str1.length !== str2.length) return result.push('Impossible');
    const charCount = {};
    [...str1].forEach((char) => {
      if (!(char in charCount)) return (charCount[char] = 1);
      charCount[char]++;
    });

    for (let i = 0; i < str2.length; i++) {
      if (!(str2[i] in charCount)) return result.push('Impossible');
      if (charCount[str2[i]] === 0) return result.push('Impossible');
      charCount[str2[i]]--;
    }
    result.push('Possible');
  });

  return result.join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
