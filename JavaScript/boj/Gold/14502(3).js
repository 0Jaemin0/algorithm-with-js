const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = [];
const zero = [];
const virus = [];
let max = -Infinity;

for (let i = 0; i < N; i++) {
  map.push(input[i + 1].split(' ').map(Number));

  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) zero.push([i, j]);
    else if (map[i][j] === 2) virus.push([i, j]);
  }
}

const getCombinations = (arr, selectNumber) => {
  const results = [];

  const backtrack = (start, current) => {
    if (current.length === selectNumber) {
      results.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(0, []);

  return results;
};

const getCount = (list) => {
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] === 0) count++;
    }
  }

  return count;
};

const bfs = (map) => {
  const queue = [...virus];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (map[nx][ny] === 0) {
          map[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return getCount(map);
};

const combi = getCombinations(zero, 3);

for (let i = 0; i < combi.length; i++) {
  const temp = map.map((row) => [...row]);

  for (let j = 0; j < combi[i].length; j++) {
    const [row, col] = combi[i][j];

    temp[row][col] = 1;
  }

  max = Math.max(max, bfs(temp));
}

console.log(max);
