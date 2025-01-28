const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let result;

for (let i = 0; i < N; i++) {
  if (input[i] === input[i].split('').reverse().join('')) {
    result = input[i];
    break;
  }

  for (let j = i + 1; j < N; j++) {
    if (input[i] === input[j].split('').reverse().join('')) {
      result = input[i];
      break;
    }
  }
}

console.log(result.length, result[Math.floor(result.length / 2)]);
