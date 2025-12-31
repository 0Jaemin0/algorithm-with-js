const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const count = Array.from({ length: N + 1 }, () => 0);
const prerequisiteSubjects = Array.from({ length: N + 1 }, () => []);
const queue = [];
const result = Array.from({ length: N }, () => 0);
let day = 1;

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(' ').map(Number);

  prerequisiteSubjects[A].push(B);
  count[B] += 1;
}

for (let i = 1; i <= N; i++) {
  if (count[i] === 0) queue.push(i);
}

while (queue.length) {
  const len = queue.length;

  for (let i = 0; i < len; i++) {
    const start = queue.shift();

    result[start - 1] = day;

    for (let j = 0; j < prerequisiteSubjects[start].length; j++) {
      count[prerequisiteSubjects[start][j]] -= 1;

      if (count[prerequisiteSubjects[start][j]] === 0)
        queue.push(prerequisiteSubjects[start][j]);
    }
  }

  day += 1;
}

console.log(result.join(' '));
