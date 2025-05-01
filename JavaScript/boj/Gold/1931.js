const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const times = [];
let count = 0;
let nowTime = 0;

for (let i = 1; i < N + 1; i++) {
  times.push(input[i].split(' ').map(Number));
}

times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];

  return a[1] - b[1];
});

for (let i = 0; i < N; i++) {
  const [start, end] = times[i];

  if (nowTime <= start) {
    count++;
    nowTime = end;
  }
}

console.log(count);
