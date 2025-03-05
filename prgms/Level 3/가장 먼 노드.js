function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  const queue = [[1, 0]];
  let max = -Infinity;
  let count = 0;

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  visited[1] = true;

  while (queue.length) {
    const [start, distance] = queue.shift();

    graph[start].forEach((end) => {
      if (!visited[end]) {
        queue.push([end, distance + 1]);
        visited[end] = true;
      }
    });

    if (max < distance) {
      max = distance;
      count = 1;
    } else if (max === distance) count++;
  }

  return count;
}
