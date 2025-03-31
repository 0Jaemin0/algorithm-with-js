function solution(priorities, location) {
  const queue = [];
  const result = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.push([i, priorities[i]]);
  }

  while (queue.length) {
    const nowProcess = queue.shift();
    const isPriority = queue.every((process) => nowProcess[1] >= process[1]);

    if (isPriority) result.push(nowProcess);
    else queue.push(nowProcess);
  }

  return result.indexOf(result.find((process) => process[0] === location)) + 1;
}
