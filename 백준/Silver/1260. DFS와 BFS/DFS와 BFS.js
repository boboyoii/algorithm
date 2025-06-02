function solution(input) {
  const [N, E, start] = input[0].split(' ').map(Number);
  const edges = input.slice(1).map((v) => v.split(' ').map(Number));
  const nodes = {};

  for (const edge of edges) {
    const [start, end] = edge;
    if (!(start in nodes)) nodes[start] = [end];
    else nodes[start].push(end);
    if (!(end in nodes)) nodes[end] = [start];
    else nodes[end].push(start);
  }

  for (const node in nodes) nodes[node].sort((a, b) => a - b);

  let pos;

  const BFS = [];
  const queue = [];
  queue.push(start);

  while (queue.length > 0) {
    pos = queue.shift();
    if (!BFS.includes(pos)) BFS.push(pos);
    if (!(pos in nodes)) continue;
    for (const nextPos of nodes[pos])
      if (!BFS.includes(nextPos)) queue.push(nextPos);
  }

  const DFS = [];
  const stack = [];
  stack.push(start);

  while (stack.length > 0) {
    pos = stack.pop();
    if (!DFS.includes(pos)) DFS.push(pos);
    if (!(pos in nodes)) continue;
    for (const nextPos of nodes[pos].reverse())
      if (!DFS.includes(nextPos)) stack.push(nextPos);
  }

  console.log(DFS.join(' '));
  console.log(BFS.join(' '));
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
