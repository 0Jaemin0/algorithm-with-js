const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = Number(input);
const result = [];
let moveCount = 0;

const hanoi = (count, start, temp, end) => {
  if (count === 0) return;

  hanoi(count - 1, start, end, temp);

  result.push(`${start} ${end}`);

  hanoi(count - 1, temp, start, end);
  moveCount++;
};

hanoi(count, 1, 2, 3);

console.log(moveCount);
console.log(result.join('\n'));
