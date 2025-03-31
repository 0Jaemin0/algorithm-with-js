function solution(jobs) {
  const queue = [];
  const length = jobs.length;
  let totalTime = 0;
  let currentTime = 0;

  jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > 0 || queue.length) {
    while (jobs.length > 0 && jobs[0][0] <= currentTime) {
      queue.push(jobs.shift());
    }

    if (queue.length) {
      queue.sort((a, b) => a[1] - b[1]);
      const [start, duration] = queue.shift();
      currentTime += duration;
      totalTime += currentTime - start;
    } else currentTime = jobs[0][0];
  }

  return Math.floor(totalTime / length);
}
