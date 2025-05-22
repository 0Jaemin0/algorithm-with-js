const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, kim, lim] = input[0].split(' ').map(Number);
let round = 0;

while (kim !== lim) {
  kim = Math.ceil(kim / 2);
  lim = Math.ceil(lim / 2);

  round++;
}
console.log(round);
