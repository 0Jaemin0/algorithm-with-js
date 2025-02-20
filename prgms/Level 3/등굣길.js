function solution(m, n, puddles) {
  const road = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  puddles.forEach((puddle) => {
    road[puddle[1]][puddle[0]] = -1;
  });

  road[1][1] = 1;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if ((i === 1 && j === 1) || road[i][j] === -1) continue;

      if (road[i - 1][j] !== -1)
        road[i][j] = (road[i][j] + road[i - 1][j]) % 1000000007;

      if (road[i][j - 1] !== -1)
        road[i][j] = (road[i][j] + road[i][j - 1]) % 1000000007;
    }
  }

  return road[n][m];
}
