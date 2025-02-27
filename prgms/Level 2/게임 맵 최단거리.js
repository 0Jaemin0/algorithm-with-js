const bfs = (maps, visited) => {
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0, 1]];

  visited[0][0] = true;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === n - 1 && y === m - 1) return count;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (!visited[nx][ny] && maps[nx][ny] === 1) {
          queue.push([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  return -1;
};

function solution(maps) {
  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );

  return bfs(maps, visited, 0, 0);
}
