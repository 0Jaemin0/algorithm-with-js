const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

class Queue {
  constructor() {
    this.queue = [];
  }

  push(X) {
    this.queue.push(X);
  }

  pop() {
    return this.empty() ? -1 : this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  front() {
    return this.empty() ? -1 : this.queue[0];
  }

  back() {
    return this.empty() ? -1 : this.queue[this.size() - 1];
  }
}

const queue = new Queue();
const result = [];

for (let i = 0; i < N; i++) {
  const [command, num] = input[i].split(' ');

  switch (command) {
    case 'push':
      queue.push(num);
      break;

    case 'pop':
      result.push(queue.pop());
      break;

    case 'size':
      result.push(queue.size());
      break;

    case 'empty':
      result.push(queue.empty());
      break;

    case 'front':
      result.push(queue.front());
      break;

    case 'back':
      result.push(queue.back());
      break;
  }
}

console.log(result.join('\n'));
