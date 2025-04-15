const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input.map((number) => number);

const calNumberSum = (number) => {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    const num = Number(number[i]);

    if (!isNaN(num)) sum += num;
  }

  return sum;
};

numbers.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;

  if (calNumberSum(a) !== calNumberSum(b)) {
    return calNumberSum(a) - calNumberSum(b);
  }

  return a.localeCompare(b);
});

console.log(numbers.join('\n'));
