function solution(N, number) {
  const result = Array.from({ length: 9 }, () => new Set());

  if (N === number) return 1;

  result[1].add(N);

  for (let i = 2; i < 9; i++) {
    result[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      result[j].forEach((a) => {
        result[i - j].forEach((b) => {
          result[i].add(a + b);
          result[i].add(a - b);
          result[i].add(a / b);
          result[i].add(a * b);
        });
      });
    }

    if (result[i].has(number)) return i;
  }

  return -1;
}
