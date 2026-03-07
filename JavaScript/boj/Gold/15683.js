const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const office = [];
const cctv = [];
const direction = [
  [],
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 3],
  ],
  [
    [0, 1, 2],
    [0, 1, 3],
    [1, 2, 3],
    [0, 2, 3],
  ],
  [[0, 1, 2, 3]],
];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = Infinity;

for (let i = 1; i <= N; i++) {
  office.push(input[i].split(' ').map(Number));

  for (let j = 0; j < M; j++) {
    if (office[i - 1][j] > 0 && office[i - 1][j] < 6) {
      const cctvNumber = office[i - 1][j];

      cctv.push([i - 1, j, cctvNumber]);
    }
  }
}

const observation = (check, x, y, move) => {
  for (let i = 0; i < move.length; i++) {
    const dir = move[i];
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    while (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (check[nx][ny] === 6) break;
      if (check[nx][ny] === 0) check[nx][ny] = -1;

      nx += dx[dir];
      ny += dy[dir];
    }
  }
};

const dfs = (cctvCount, office) => {
  if (cctvCount === cctv.length) {
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (office[i][j] === 0) count++;
      }
    }

    result = Math.min(result, count);

    return;
  }

  const [x, y, cctvNumber] = cctv[cctvCount];

  for (let i = 0; i < direction[cctvNumber].length; i++) {
    const check = office.map((line) => [...line]);

    observation(check, x, y, direction[cctvNumber][i]);
    dfs(cctvCount + 1, check);
  }
};

dfs(0, office);

console.log(result);
