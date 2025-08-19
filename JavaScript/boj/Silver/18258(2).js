class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  push(X) {
    this.queue.push(X);
  }

  pop() {
    return this.size() ? this.queue[this.index++] : -1;
  }

  size() {
    return this.queue.length - this.index;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  front() {
    return this.size() ? this.queue[this.index] : -1;
  }

  back() {
    return this.size() ? this.queue[this.queue.length - 1] : -1;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\r\n');

const queue = new Queue();
const result = [];

for (let i = 0; i < +N; i++) {
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
