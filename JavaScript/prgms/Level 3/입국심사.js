function solution(n, times) {
  let start = times[0];
  let end = times[times.length - 1] * n;
  times.sort((a, b) => a - b);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;

    times.forEach((time) => {
      count += Math.floor(mid / time);
    });

    if (count >= n) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}
