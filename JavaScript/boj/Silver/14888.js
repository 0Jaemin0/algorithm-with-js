const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);
let result = [-Infinity, Infinity];

const backtrack = (count, operator, sum) => {
  if (count === N - 1) {
    result[0] = Math.max(result[0], sum);
    result[1] = Math.min(result[1], sum);

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operator[i] === 0) continue;

    operator[i] -= 1;

    let nextSum;

    switch (i) {
      case 0:
        nextSum = sum + numbers[count + 1];

        break;
      case 1:
        nextSum = sum - numbers[count + 1];

        break;
      case 2:
        nextSum = sum * numbers[count + 1];

        break;
      case 3:
        if (sum < 0) nextSum = -Math.floor(Math.abs(sum) / numbers[count + 1]);
        else nextSum = Math.floor(sum / numbers[count + 1]);

        break;
    }

    backtrack(count + 1, operator, nextSum);
    operator[i] += 1;
  }
};

backtrack(0, operators, numbers[0]);

console.log(result.join('\n'));
