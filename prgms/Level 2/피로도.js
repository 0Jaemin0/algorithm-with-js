const dfs = (k, dungeons, visited, count) => {
  let max = count;

  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0] && !visited[i]) {
      visited[i] = true;
      max = Math.max(
        max,
        dfs(k - dungeons[i][1], dungeons, visited, count + 1)
      );
      visited[i] = false;
    }
  }

  return max;
};

function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);

  return dfs(k, dungeons, visited, 0);
}
