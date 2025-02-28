const dfs = (tickets, start, count, visited, result) => {
  result.push(start);

  if (count === tickets.length) return true;

  for (let i = 0; i < tickets.length; i++) {
    const [a, b] = tickets[i];
    if (a === start && !visited[i]) {
      visited[i] = true;
      if (dfs(tickets, b, count + 1, visited, result)) return true;
      visited[i] = false;
      result.pop();
    }
  }

  return false;
};

function solution(tickets) {
  const visited = new Array(tickets.length - 1).fill(false);
  const result = [];

  tickets.sort((a, b) =>
    a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])
  );

  dfs(tickets, 'ICN', 0, visited, result);

  return result;
}
