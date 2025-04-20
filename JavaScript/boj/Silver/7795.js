const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

const getCount = (A, B) => {
  let count = 0;

  A.forEach((num) => {
    for (let i = 0; i < B.length; i++) {
      if (num > B[i]) {
        count += B.length - i;
        break;
      }
    }
  });

  return count;
};

for (let i = 0; i < T; i++) {
  const A = input[i * 3 + 1].split(' ').map(Number);
  const B = input[i * 3 + 2]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  result.push(getCount(A, B));
}

console.log(result.join('\n'));
