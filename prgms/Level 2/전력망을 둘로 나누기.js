const dfs = (start, networks, visited) => {
  const stack = [start];
  let count = 0;

  while (stack.length) {
    const startTop = stack.pop();
    visited[startTop] = true;
    count++;

    for (const nearTop of networks[startTop]) {
      if (!visited[nearTop]) stack.push(nearTop);
    }
  }

  return count;
};

function solution(n, wires) {
  const result = [];

  for (let i = 0; i < wires.length; i++) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const networks = Array.from({ length: n + 1 }, () => []);
    const [leftNetwork, rightNetwork] = wires[i];

    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        const [start, end] = wires[j];
        networks[start].push(end);
        networks[end].push(start);
      }
    }

    result.push(
      Math.abs(
        dfs(leftNetwork, networks, visited) -
          dfs(rightNetwork, networks, visited)
      )
    );
  }

  return Math.min(...result);
}
