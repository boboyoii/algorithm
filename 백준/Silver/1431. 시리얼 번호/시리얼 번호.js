const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const serial = input.slice(1);

function serialSort(serial) {
  serial.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;

    const totalA = a
      .split('')
      .filter(Number)
      .reduce((acc, digit) => acc + Number(digit), 0);

    const totalB = b
      .split('')
      .filter(Number)
      .reduce((acc, digit) => acc + Number(digit), 0);

    if (totalA !== totalB) return totalA - totalB;

    return a.localeCompare(b);
  });

  return serial;
}

const sortedSerial = serialSort(serial);
console.log(sortedSerial.join('\n'));
