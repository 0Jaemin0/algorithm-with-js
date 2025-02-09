function solution(operations) {
  const queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, number] = operations[i].split(' ');

    switch (command) {
      case 'I': {
        queue.push(Number(number));
        queue.sort((a, b) => b - a);
        break;
      }

      case 'D': {
        if (Number(number) === 1) queue.shift();
        else queue.pop();
        break;
      }
    }
  }

  return queue.length ? [queue[0], queue[queue.length - 1]] : [0, 0];
}
