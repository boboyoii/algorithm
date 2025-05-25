class Node {
  constructor(data, before, next) {
    this.data = data;
    this.before = before;
    this.next = next;
  }
}
function solution(input) {
  const editor = `-${input[0]}-`
    .split('')
    .map((char, idx) => new Node(char, idx - 1, idx + 1));

  editor[0].before = -1;
  editor[editor.length - 1].next = -1;

  const commands = input.filter((_, idx) => idx !== 0 && idx !== 1);
  let cursor = editor.length - 1;
  commands.forEach((v) => {
    const command = v.split(' ')[0];
    if (command === 'L' && editor[cursor].before !== 0)
      cursor = editor[cursor].before;
    if (command === 'D' && editor[cursor].next !== -1)
      cursor = editor[cursor].next;
    if (command === 'B' && editor[cursor].before !== 0) {
      editor[cursor].before = editor[editor[cursor].before].before;
      editor[editor[cursor].before].next = cursor;
    }
    if (command === 'P') {
      const char = v.split(' ')[1];
      editor.push(
        new Node(
          char,
          editor[cursor].before,
          editor[editor[cursor].before].next
        )
      );

      editor[editor[cursor].before].next = editor.length - 1;
      editor[cursor].before = editor.length - 1;
    }
  });

  const result = [];
  let i = 0;
  while (true) {
    if (editor[editor[i].next].data === '-') break;
    i = editor[i].next;
    result.push(editor[i].data);
  }
  return result.join('');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
