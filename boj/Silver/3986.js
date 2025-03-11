const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let count = 0;

for (let i = 0; i < N; i++) {
  const word = input[i];
  const stack = [];

  for (let j = 0; j < word.length; j++) {
    if (!stack.length || stack[stack.length - 1] !== word[j])
      stack.push(word[j]);
    else stack.pop();
  }

  if (stack.length) count++;
}

console.log(N - count);
