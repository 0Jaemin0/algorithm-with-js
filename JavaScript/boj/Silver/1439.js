const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = input[0];
const zero = S.split('1').filter((num) => num.length > 0);
const one = S.split('0').filter((num) => num.length > 0);

console.log(Math.min(zero.length, one.length));
