const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function coordinateSort(coordinate) {
  coordinate.sort((a, b) => a[1] - b[1]);
  coordinate.sort((a, b) => a[0] - b[0]);
  return coordinate;
}

let coordinate = input.slice(1).map((point) => {
  const [x, y] = point.split(' ');
  return [Number(x), Number(y)];
});

coordinate = coordinateSort(coordinate);

const coordinateString = coordinate.map(([x, y]) => `${x} ${y}`);
console.log(coordinateString.join('\n'));
