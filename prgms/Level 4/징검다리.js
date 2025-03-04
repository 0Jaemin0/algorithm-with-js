function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.unshift(0);
  rocks.push(distance);

  let start = 0;
  let end = distance;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let count = 0;
    let prev = rocks[0];

    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) count++;
      else prev = rocks[i];
    }

    if (count > n) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}
