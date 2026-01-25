const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const computerCount = +input[0];
const coupleCount = +input[1];
const connections = Array.from({ length: computerCount + 1 }, () => []);
const visited = Array.from({ length: computerCount + 1 }, () => false);
const queue = [1];
let result = 0;
visited[1] = true;

for (let i = 2; i < 2 + coupleCount; i++) {
  const [start, end] = input[i].split(' ').map(Number);

  connections[start].push(end);
  connections[end].push(start);
}

while (queue.length) {
  const now = queue.shift();

  for (let i = 0; i < connections[now].length; i++) {
    const number = connections[now][i];

    if (!visited[number]) {
      queue.push(number);
      visited[number] = true;
      result++;
    }
  }
}

console.log(result);
