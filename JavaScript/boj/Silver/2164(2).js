const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim();

const cards = {};
let front = 1;
let end = +N;

for (let i = 1; i <= N; i++) cards[i] = i;

while (front !== end) {
  delete cards[front++];

  const card = cards[front];
  delete cards[front++];
  cards[++end] = card;
}

console.log(cards[front]);
