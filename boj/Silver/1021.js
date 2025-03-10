const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const queue = Array.from({ length: N }, (_, i) => i + 1);
const numbers = input[1].split(' ').map(Number);
let count = 0;
let move = 0;

while (numbers.length) {
  const now = queue[0];

  if (numbers[0] === now) {
    numbers.shift();
    queue.shift();
  } else if (queue.indexOf(numbers[0]) > queue.length / 2) {
    move = queue.length - queue.indexOf(numbers[0]);

    for (let i = 0; i < move; i++) {
      queue.unshift(queue.pop());
      count++;
    }
  } else {
    move = queue.indexOf(numbers[0]);

    for (let i = 0; i < move; i++) {
      queue.push(queue.shift());
      count++;
    }
  }
}

console.log(count);
