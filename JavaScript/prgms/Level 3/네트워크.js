const bfs = (index, computers, visited) => {
  const queue = [index];

  while (queue.length) {
    const start = queue.pop();
    visited[start] = true;

    computers[start].forEach((computer, index) => {
      if (!visited[index] && computer === 1) queue.push(index);
    });
  }
};

function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i, computers, visited);
      count++;
    }
  }

  return count;
}
