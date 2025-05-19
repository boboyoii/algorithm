function solution(input) {
  let commands = input.filter((_, idx) => idx != 0);
  let stack = [];
  commands.forEach((v) => {
    const command = v.split(' ')[0];
    switch (command) {
      case 'push':
        const value = v.split(' ')[1];
        stack.push(value);
        break;
      case 'pop':
        const pop = stack.pop();
        console.log(pop !== undefined ? pop : '-1');
        break;
      case 'size':
        console.log(`${stack.length}`);
        break;
      case 'empty':
        if (stack.length === 0) console.log('1');
        else console.log('0');
        break;
      case 'top':
        console.log(stack.length !== 0 ? stack[stack.length - 1] : '-1');
        break;
      default:
        console.log('잘못된 명령어 입니다.');
    }
  });
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
