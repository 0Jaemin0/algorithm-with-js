const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const names = input[1].split(' ').map(Number);
let plug = [];
let count = 0;

for (let i = 0; i < K; i++) {
  if (plug.includes(names[i])) continue;
  else if (plug.length < N) plug.push(names[i]);
  else {
    let next = 0;
    let index = -1;

    for (let j = 0; j < plug.length; j++) {
      const nextUse = names.indexOf(plug[j], i + 1);

      if (nextUse === -1) {
        next = plug[j];
        break;
      }

      if (nextUse > index) {
        index = nextUse;
        next = plug[j];
      }
    }

    plug = plug.filter((name) => name !== next);
    plug.push(names[i]);
    count++;
  }
}

console.log(count);
