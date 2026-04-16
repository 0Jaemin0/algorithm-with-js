const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const words = [];
const find = new Set();
let bit = 0;
let result = 0;

bit |= 1 << ('a'.charCodeAt(0) - 97);
bit |= 1 << ('n'.charCodeAt(0) - 97);
bit |= 1 << ('t'.charCodeAt(0) - 97);
bit |= 1 << ('i'.charCodeAt(0) - 97);
bit |= 1 << ('c'.charCodeAt(0) - 97);

for (let i = 1; i <= N; i++) {
  const word = input[i].slice(4, input[i].length - 4);
  let wordBit = 0;

  for (let j = 0; j < word.length; j++) {
    wordBit |= 1 << (word[j].charCodeAt(0) - 97);

    if (!(bit & (1 << (word[j].charCodeAt(0) - 97)))) find.add(word[j]);
  }

  words.push(wordBit);
}

const getCount = (current) => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    const word = words[i];

    if ((current & word) === word) count++;
  }

  return count;
};

const backtrack = (count, current, start, alpha) => {
  if (count === K - 5) {
    result = Math.max(getCount(current), result);

    return;
  }

  for (let i = start; i < alpha.length; i++) {
    const next = current | (1 << (alpha[i].charCodeAt(0) - 97));

    backtrack(count + 1, next, i + 1, alpha);
  }
};

if (K < 5) result = 0;
else if (K === 26) result = N;
else if (find.size <= K - 5) result = N;
else backtrack(0, bit, 0, [...find]);

console.log(result);
