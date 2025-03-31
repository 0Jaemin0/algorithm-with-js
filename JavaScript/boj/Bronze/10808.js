const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const alpha = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alpha[input[i].charCodeAt(0) - 97] += 1;
}

console.log(alpha.join(' '));
