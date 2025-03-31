const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

class Stack {
  constructor() {
    this.stack = [];
  }

  push(X) {
    this.stack.push(X);
  }

  pop() {
    if (this.empty()) return -1;
    else return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  empty() {
    if (!this.stack.length) return 1;
    else return 0;
  }

  top() {
    if (this.empty()) return -1;
    else return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();
const result = [];

for (let i = 0; i < N; i++) {
  const [command, num] = input[i].split(' ');

  switch (command) {
    case 'push':
      stack.push(num);
      break;

    case 'pop':
      result.push(stack.pop());
      break;

    case 'size':
      result.push(stack.size());
      break;

    case 'empty':
      result.push(stack.empty());
      break;

    case 'top':
      result.push(stack.top());
      break;
  }
}

console.log(result.join('\n'));
