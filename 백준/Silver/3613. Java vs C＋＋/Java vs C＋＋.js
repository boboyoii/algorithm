const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function isUpper(c) {
  return c >= 'A' && c <= 'Z';
}

function getType(str) {
  if (str.length === 0) return false;
  if (str.includes(' ')) return false;

  const hasUnderscore = str.includes('_');

  // underscore가 있으면 C++ 후보
  if (hasUnderscore) {
    // 에러 조건들
    if (str[0] === '_' || str[str.length - 1] === '_') return false;
    if (str.includes('__')) return false;
    for (const ch of str) if (isUpper(ch)) return false; // C++는 대문자 금지
    return 'cpp';
  }

  // underscore가 없으면 Java 후보
  if (isUpper(str[0])) return false; // 첫 글자 대문자면 에러
  return 'java';
}

function toCpp(str) {
  const result = [];
  for (const char of str) {
    if (isUpper(char)) result.push('_');
    result.push(char.toLowerCase());
  }
  return result.join('');
}

function toJava(str) {
  const result = [];
  const words = str.split('_');

  words.forEach((word, idx) => {
    if (idx === 0) {
      result.push(word);
      return;
    }
    result.push(word[0].toUpperCase(), ...word.slice(1));
  });

  return result.join('');
}

function solution(str) {
  const type = getType(str);
  if (!type) return 'Error!';
  return type === 'cpp' ? toJava(str) : toCpp(str);
}

console.log(solution(input));
