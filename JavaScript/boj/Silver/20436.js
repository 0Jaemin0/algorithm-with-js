const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let [startL, startR] = input[0].split(' ');
const str = input[1];
const left = new Map([
  ['q', [0, 0]],
  ['w', [0, 1]],
  ['e', [0, 2]],
  ['r', [0, 3]],
  ['t', [0, 4]],
  ['a', [1, 0]],
  ['s', [1, 1]],
  ['d', [1, 2]],
  ['f', [1, 3]],
  ['g', [1, 4]],
  ['z', [2, 0]],
  ['x', [2, 1]],
  ['c', [2, 2]],
  ['v', [2, 3]],
]);
const right = new Map([
  ['y', [0, 5]],
  ['u', [0, 6]],
  ['i', [0, 7]],
  ['o', [0, 8]],
  ['p', [0, 9]],
  ['h', [1, 5]],
  ['j', [1, 6]],
  ['k', [1, 7]],
  ['l', [1, 8]],
  ['b', [2, 4]],
  ['n', [2, 5]],
  ['m', [2, 6]],
]);
let result = 0;

for (let i = 0; i < str.length; i++) {
  const now = str[i];

  if (left.has(now)) {
    const [nowX, nowY] = left.get(startL);
    const [moveX, moveY] = left.get(now);

    result += Math.abs(nowX - moveX) + Math.abs(nowY - moveY) + 1;
    startL = now;
  } else {
    const [nowX, nowY] = right.get(startR);
    const [moveX, moveY] = right.get(now);

    result += Math.abs(nowX - moveX) + Math.abs(nowY - moveY) + 1;
    startR = now;
  }
}

console.log(result);
