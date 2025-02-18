function solution(routes) {
  let count = 0;
  let camera = -Infinity;

  routes.sort((a, b) => a[1] - b[1]);

  routes.forEach(([entry, exit]) => {
    if (camera < entry) {
      count++;
      camera = exit;
    }
  });

  return count;
}
