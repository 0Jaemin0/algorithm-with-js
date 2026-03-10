const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = [];
const queue = [[0, 0, 0, 0, 0]];
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: N }, () => new Array(M).fill(false)),
  ),
);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
  board.push(input[i + 1].split(''));

  for (let j = 0; j < M; j++) {
    if (board[i][j] === 'R') {
      queue[0][0] = i;
      queue[0][1] = j;
    } else if (board[i][j] === 'B') {
      queue[0][2] = i;
      queue[0][3] = j;
    }
  }
}

const move = (x, y, direction) => {
  let moveCount = 0;

  while (
    board[x + dx[direction]][y + dy[direction]] !== '#' &&
    board[x][y] !== 'O'
  ) {
    x += dx[direction];
    y += dy[direction];

    moveCount++;
  }

  return [x, y, moveCount];
};

const bfs = () => {
  visited[queue[0][0]][queue[0][1]][queue[0][2]][queue[0][3]] = true;

  while (queue.length) {
    const [rx, ry, bx, by, count] = queue.shift();

    if (count >= 10) continue;

    for (let j = 0; j < 4; j++) {
      let [rnx, rny, rMove] = move(rx, ry, j);
      let [bnx, bny, bMove] = move(bx, by, j);

      if (board[bnx][bny] === 'O') continue;

      if (board[rnx][rny] === 'O') {
        console.log(count + 1);

        return;
      }

      if (rnx === bnx && rny === bny) {
        rMove > bMove ? (rnx -= dx[j]) : (bnx -= dx[j]);
        rMove > bMove ? (rny -= dy[j]) : (bny -= dy[j]);
      }

      if (!visited[rnx][rny][bnx][bny]) {
        visited[rnx][rny][bnx][bny] = true;
        queue.push([rnx, rny, bnx, bny, count + 1]);
      }
    }
  }

  console.log(-1);
};

bfs();
