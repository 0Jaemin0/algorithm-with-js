const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const len = input[0].length;

for (let i = N - len * 9; i <= N - len; i++) {
  let sum = i;
  let str = String(i);

  for (let j = 0; j < str.length; j++) sum += +str[j];

  if (sum === N) {
    console.log(i);

    return;
  }
}

console.log(0);
