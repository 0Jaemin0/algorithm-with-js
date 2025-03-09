const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim();

class Deque {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  push_back(item) {
    this.items[this.rear++] = item;
  }

  pop_front() {
    if (this.empty()) return -1;
    const item = this.items[this.front];
    delete this.items[this.front++];

    return item;
  }

  get_front() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    return this.size() === 0;
  }
}

const deque = new Deque();

for (let i = 1; i <= N; i++) deque.push_back(i);

while (deque.size() > 1) {
  deque.pop_front();
  deque.push_back(deque.pop_front());
}

console.log(deque.get_front());
