const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 2].split(' ').map(Number);
  const queue = input[i * 2 + 1]
    .split(' ')
    .map((num, index) => [index, Number(num)]);
  let count = 0;

  while (queue.length > 0) {
    const left = queue.shift();

    if (queue.some((document) => document[1] > left[1])) {
      queue.push(left);
    } else {
      count++;

      if (left[0] === M) {
        result.push(count);
        break;
      }
    }
  }
}

console.log(result.join('\n'));
