const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const gears = [];
const K = +input[4];
let result = 0;

for (let i = 0; i < 4; i++) gears.push(input[i].split('').map(Number));

const rotation = (start, direction) => {
  const list = new Array(4).fill(0);
  list[start] = direction;

  for (let i = start + 1; i < 4; i++) {
    if (gears[i][6] === gears[i - 1][2]) break;
    else list[i] = -list[i - 1];
  }

  for (let i = start - 1; i >= 0; i--) {
    if (gears[i][2] === gears[i + 1][6]) break;
    else list[i] = -list[i + 1];
  }

  for (let i = 0; i < 4; i++) {
    if (list[i] === 1) gears[i].unshift(gears[i].pop());
    else if (list[i] === -1) gears[i].push(gears[i].shift());
  }
};

for (let i = 0; i < K; i++) {
  const [number, direction] = input[5 + i].split(' ').map(Number);

  rotation(number - 1, direction);
}

for (let i = 0; i < 4; i++) {
  const gear = gears[i];

  if (gear[0] === 1) result += 2 ** i;
}

console.log(result);
