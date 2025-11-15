function solution(x, y, n) {
  const queue = [[x, 0]];
  const visited = new Set([x]);
  let index = 0;

  while (index < queue.length) {
    const [value, count] = queue[index++];

    if (value === y) return count;

    for (const num of [value + n, value * 2, value * 3]) {
      if (num <= y && !visited.has(num)) {
        queue.push([num, count + 1]);
        visited.add(num);
      }
    }
  }

  return -1;
}
