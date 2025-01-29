const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const fruits = {};

for (let i = 0; i < N; i++) {
  const [fruitName, number] = input[i].split(' ');
  if (fruitName in fruits) fruits[fruitName] += Number(number);
  else fruits[fruitName] = Number(number);
}

if (Object.values(fruits).includes(5)) console.log('YES');
else console.log('NO');
