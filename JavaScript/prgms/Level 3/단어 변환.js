const changeWord = (origin, compare) => {
  let count = origin.length;

  for (let i = 0; i < origin.length; i++) {
    if (origin[i] === compare[i]) count--;
  }

  return count === 1;
};

const bfs = (visited, begin, target, words) => {
  const queue = [[begin, 0]];

  while (queue.length) {
    const [start, count] = queue.shift();

    if (start === target) return count;

    words.forEach((word, index) => {
      if (!visited[index] && changeWord(start, word)) {
        queue.push([word, count + 1]);
        visited[index] = true;
      }
    });
  }

  return 0;
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = new Array(words.length).fill(false);

  return bfs(visited, begin, target, words);
}
