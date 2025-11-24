const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);
let count = 0;

while (B > A) {
  const str = String(B);

  if (str[str.length - 1] === '1') {
    B = Number(str.slice(0, str.length - 1));
    count++;
  } else if (B % 2 === 0) {
    B = B / 2;
    count++;
  } else break;
}

console.log(B === A ? count + 1 : -1);
