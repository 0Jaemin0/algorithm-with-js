const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const words = new Array(N);
let max = 0;
let letters = 0;

letters |= 1 << ('a'.charCodeAt(0) - 97);
letters |= 1 << ('c'.charCodeAt(0) - 97);
letters |= 1 << ('i'.charCodeAt(0) - 97);
letters |= 1 << ('n'.charCodeAt(0) - 97);
letters |= 1 << ('t'.charCodeAt(0) - 97);

for (let i = 1; i <= N; i++) {
  let wordMask = letters;
  const word = input[i];

  for (let j = 4; j < word.length - 4; j++) {
    wordMask |= 1 << (word[j].charCodeAt(0) - 97);
  }

  words[i - 1] = wordMask;
}

const combi = (index, mask, count) => {
  if (count === K) {
    check(mask);
    return;
  }

  if (index > 25) return;

  combi(index + 1, mask, count);

  if ((mask & (1 << index)) === 0) {
    combi(index + 1, mask | (1 << index), count + 1);
  }
};

const check = (mask) => {
  let count = 0;

  for (let word of words) {
    if ((mask & word) === word) count++;
  }

  max = Math.max(max, count);
};

if (K < 5) {
  console.log(0);
} else {
  combi(0, letters, 5);
  console.log(max);
}
