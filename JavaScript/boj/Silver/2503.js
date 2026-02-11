const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const answer = [];
let count = 0;

for (let i = 1; i <= N; i++) answer.push(input[i].split(' '));

const checkNumber = (num) => {
  for (let i = 0; i < N; i++) {
    let sCount = 0;
    let bCount = 0;
    const [number, s, b] = answer[i];

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j === k && num[j] === number[k]) sCount++;
        if (j !== k && num[j] === number[k]) bCount++;
      }
    }

    if (sCount !== +s || bCount !== +b) return false;
  }

  return true;
};

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    for (let k = 1; k < 10; k++) {
      if (i !== j && i !== k && j !== k) {
        const num = 100 * i + 10 * j + k;

        if (checkNumber(String(num))) count++;
      }
    }
  }
}

console.log(count);
