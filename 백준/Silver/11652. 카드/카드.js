const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const numCards = input.slice(1);

function getModeCard(cards) {
  const count = {};

  for (const num of cards) {
    count[num] = (count[num] || 0) + 1;
  }

  let modeCard = null;
  let maxCount = 0;

  const sortedKeys = Object.keys(count).sort((a, b) => {
    const bigA = BigInt(a);
    const bigB = BigInt(b);

    if (bigA > bigB) {
      return 1;
    }
    if (bigA < bigB) {
      return -1;
    }
    return 0;
  });

  for (const card of sortedKeys) {
    if (count[card] > maxCount) {
      maxCount = count[card];
      modeCard = BigInt(card);
    }
  }

  return modeCard.toString();
}

console.log(getModeCard(numCards));
