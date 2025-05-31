function solution(input) {
  const painitng = input.slice(1).map((v) => v.split(' '));
  const visit = Array.from({ length: painitng.length }, () =>
    Array.from({ length: painitng[0].length }, () => false)
  );
  const queue = [];
  const extents = [];

  for (let i = 0; i < painitng.length; i++) {
    for (let j = 0; j < painitng[0].length; j++) {
      queue.push([i, j]);
      let extent = 0;
      while (queue.length !== 0) {
        const [x_copy, y_copy] = queue.shift();
        if (visit[x_copy][y_copy]) continue;
        visit[x_copy][y_copy] = true;
        if (painitng[x_copy][y_copy] === '0') continue;
        extent += 1;

        if (x_copy - 1 > -1 && !visit[x_copy - 1][y_copy])
          queue.push([x_copy - 1, y_copy]);
        if (x_copy + 1 < painitng.length && !visit[x_copy + 1][y_copy])
          queue.push([x_copy + 1, y_copy]);
        if (y_copy - 1 > -1 && !visit[x_copy][y_copy - 1])
          queue.push([x_copy, y_copy - 1]);
        if (y_copy + 1 < painitng[0].length && !visit[x_copy][y_copy + 1])
          queue.push([x_copy, y_copy + 1]);
      }
      if (extent !== 0) extents.push(extent);
    }
  }
  console.log(extents.length);
  console.log(extents.length === 0 ? 0 : Math.max(...extents));
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

solution(input);
