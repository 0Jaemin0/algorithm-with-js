class Stack {
  constructor() {
    this.stack = [];
  }

  push(X) {
    this.stack.push(X);
  }

  pop() {
    return this.size() ? this.stack.pop() : -1;
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  top() {
    return this.size() ? this.stack[this.stack.length - 1] : -1;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\r\n');

const stack = new Stack();
const result = [];

for (let i = 0; i < +N; i++) {
  const [command, num] = input[i].split(' ');

  switch (command) {
    case 'push': {
      stack.push(num);
      break;
    }
    case 'pop': {
      result.push(stack.pop());
      break;
    }
    case 'size': {
      result.push(stack.size());
      break;
    }
    case 'empty': {
      result.push(stack.empty());
      break;
    }
    case 'top': {
      result.push(stack.top());
      break;
    }
  }
}

console.log(result.join('\n'));
