const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const max = Math.max(...input) * 2;
const visited = new Array(max + 1).fill(true);
const result = [];

visited[0] = false;
visited[1] = false;

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (visited[i]) {
    for (let j = i * i; j <= max; j += i) visited[j] = false;
  }
}

for (let i = 0; i < input.length - 1; i++) {
  let count = 0;

  for (let j = input[i] + 1; j <= input[i] * 2; j++) {
    if (visited[j]) count++;
  }

  result.push(count);
}

console.log(result.join('\n'));
