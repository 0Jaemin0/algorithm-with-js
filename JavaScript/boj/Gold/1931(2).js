const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const times = [];
let count = 0;
let time = 0;

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(' ').map(Number);

  times.push([start, end]);
}

times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];

  return a[1] - b[1];
});

for (let i = 0; i < times.length; i++) {
  const [start, end] = times[i];

  if (time <= start) {
    time = end;
    count++;
  }
}

console.log(count);
