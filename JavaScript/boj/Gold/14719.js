const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const blocks = input[1].split(' ').map(Number);
let result = 0;

for (let i = H; i > 0; i--) {
  let start = -1;

  for (let j = 0; j < W; j++) {
    if (blocks[j] >= i) {
      if (start > -1) result += j - start - 1;

      start = j;
    }
  }
}

console.log(result);
