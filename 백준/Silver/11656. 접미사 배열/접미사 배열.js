function solution(input){
    const letters = input.split('');
    
    const suffixes = letters.map((letter, idx, letters) => letters.slice(idx).join(''));

    return suffixes.sort().join('\n');

}


const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();


console.log(solution(input));