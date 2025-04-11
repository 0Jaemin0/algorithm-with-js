const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const seat = [];
const seatIndex = [];
const combi = [];
let result = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) seatIndex.push([i, j]);
  seat.push(input[i].split(''));
}

const isMakeTeam = (students) => {
  const count = students.filter(([x, y]) => seat[x][y] === 'Y').length;

  return count > 3 ? false : true;
};

const isConnected = (students) => {
  const queue = [students[0]];
  const visited = Array.from({ length: 5 }, () => new Array(5).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let count = 1;

  visited[students[0][0]][students[0][1]] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (
          !visited[nx][ny] &&
          students.some(([sx, sy]) => sx === nx && sy === ny)
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          count++;
        }
      }
    }
  }

  return count === 7 ? true : false;
};

const dfs = (depth, start) => {
  if (depth === 7) {
    if (isMakeTeam(combi) && isConnected(combi)) result++;

    return;
  }

  for (let i = start; i < 25; i++) {
    combi.push(seatIndex[i]);
    dfs(depth + 1, i + 1);
    combi.pop();
  }
};

dfs(0, 0);

console.log(result);
