class Deque {
  constructor() {
    this.deque = {};
    this.head = 0;
    this.tail = 0;
  }

  push_front(X) {
    this.deque[--this.head] = X;
  }

  push_back(X) {
    this.deque[this.tail++] = X;
  }

  pop_front() {
    if (this.empty()) return -1;

    const front = this.deque[this.head];
    delete this.deque[this.head++];

    return front;
  }

  pop_back() {
    if (this.empty()) return -1;

    const end = this.deque[--this.tail];
    delete this.deque[this.tail];

    return end;
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  front() {
    return this.empty() ? -1 : this.deque[this.head];
  }

  back() {
    return this.empty() ? -1 : this.deque[this.tail - 1];
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\r\n');

const deque = new Deque();
const result = [];

for (let i = 0; i < +N; i++) {
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
