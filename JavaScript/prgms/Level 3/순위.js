function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(false)
  );
  let result = 0;

  results.forEach(([win, lose]) => {
    graph[win][lose] = true;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) graph[i][j] = true;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= n; j++) {
      if (graph[i][j] || graph[j][i]) count++;
    }

    if (count === n - 1) result++;
  }

  return result;
}
