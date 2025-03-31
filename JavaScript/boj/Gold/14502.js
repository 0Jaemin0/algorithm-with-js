const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = [];
const zero = [];
let max = -Infinity;

for (let i = 0; i < N; i++) {
  map.push(input[i + 1].split(' ').map(Number));

  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) zero.push([i, j]);
  }
}

const getCombination = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
};

const combi = getCombination(zero, 3);

const bfs = (temp) => {
  const virus = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (temp[i][j] === 2) virus.push([i, j]);
    }
  }

  while (virus.length) {
    const [x, y] = virus.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (temp[nx][ny] === 0) {
          temp[nx][ny] = 2;
          virus.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (temp[i][j] === 0) count++;
    }
  }

  return count;
};

for (let i = 0; i < combi.length; i++) {
  const temp = map.map((row) => [...row]);

  combi[i].forEach(([x, y]) => {
    temp[x][y] = 1;
  });

  max = Math.max(max, bfs(temp));
}

console.log(max);
