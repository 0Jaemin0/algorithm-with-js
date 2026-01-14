const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const switchCount = +input[0];
const switchStates = input[1].split(' ').map(Number);
const studentCount = +input[2];
const reverse = [1, 0];

for (let i = 0; i < studentCount; i++) {
  const [gender, number] = input[3 + i].split(' ').map(Number);

  if (gender === 1) {
    for (let j = number; j <= switchCount; j += number) {
      switchStates[j - 1] = reverse[switchStates[j - 1]];
    }
  } else {
    let count = 0;

    for (let j = 1; j + number <= switchCount || number - j > 0; j++) {
      if (switchStates[number - 1 - j] === switchStates[number - 1 + j]) {
        count++;
      } else break;
    }

    for (let j = number - count; j <= number + count; j++) {
      switchStates[j - 1] = reverse[switchStates[j - 1]];
    }
  }
}

for (let i = 0; i <= Math.floor(switchCount / 20); i++) {
  console.log(switchStates.slice(i * 20, i * 20 + 20).join(' '));
}
