const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const home = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) home[i] = +input[i + 1];

home.sort((a, b) => a - b);

let start = 1;
let end = home[home.length - 1];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = home[0];

  for (let i = 1; i < home.length; i++) {
    if (home[i] - prev >= mid) {
      count += 1;
      prev = home[i];
    }
  }

  if (count >= C) start = mid + 1;
  else end = mid - 1;
}

console.log(end);
