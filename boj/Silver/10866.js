const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.rear = 0;
  }

  push_front(X) {
    this.items[--this.head] = X;
  }

  push_back(X) {
    this.items[this.rear++] = X;
  }

  pop_front() {
    if (this.empty()) return -1;
    const item = this.items[this.head];
    delete this.items[this.head++];

    return item;
  }

  pop_back() {
    if (this.empty()) return -1;
    const item = this.items[--this.rear];
    delete this.items[this.rear];

    return item;
  }

  size() {
    return this.rear - this.head;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.items[this.head];
  }

  back() {
    return this.empty() ? -1 : this.items[this.rear - 1];
  }
}

const deque = new Deque();
const result = [];

for (let i = 0; i < N; i++) {
  const [command, num] = input[i].split(' ');

  switch (command) {
    case 'push_front':
      deque.push_front(num);
      break;
    case 'push_back':
      deque.push_back(num);
      break;
    case 'pop_front':
      result.push(deque.pop_front());
      break;
    case 'pop_back':
      result.push(deque.pop_back());
      break;
    case 'size':
      result.push(deque.size());
      break;
    case 'empty':
      result.push(deque.empty());
      break;
    case 'front':
      result.push(deque.front());
      break;
    case 'back':
      result.push(deque.back());
      break;
  }
}

console.log(result.join('\n'));
