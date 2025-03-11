const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const sentence = input[i];
  const stack = [];

  for (let j = 0; j < sentence.length - 1; j++) {
    if (sentence[j] === '(') stack.push('(');
    else if (sentence[j] === '[') stack.push('[');
    else if (sentence[j] === ')' || sentence[j] === ']') {
      if (
        (sentence[j] === ')' && stack[stack.length - 1] === '(') ||
        (sentence[j] === ']' && stack[stack.length - 1] === '[')
      )
        stack.pop();
      else stack.push(sentence[j]);
    }
  }

  result.push(stack.length ? 'no' : 'yes');
}

console.log(result.join('\n'));
