const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const eggs = input.slice(1).map((e) => e.split(' ').map(Number));
let result = 0;

const getCount = () => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (eggs[i][0] <= 0) count++;
  }

  return count;
};

const backtrack = (now) => {
  let pass = true;

  if (now === N) {
    result = Math.max(result, getCount());

    return;
  }

  for (let i = 0; i < N; i++) {
    if (eggs[now][0] <= 0 || eggs[i][0] <= 0 || i === now) continue;

    pass = false;
    eggs[now][0] -= eggs[i][1];
    eggs[i][0] -= eggs[now][1];

    backtrack(now + 1);

    eggs[now][0] += eggs[i][1];
    eggs[i][0] += eggs[now][1];
  }

  if (pass) backtrack(now + 1);
};

backtrack(0);

console.log(result);
