function solution(citations) {
  citations.sort((a, b) => a - b);
  const max = citations.length;

  for (let i = 0; i < max; i++) {
    if (citations[i] >= max - i) return max - i;
  }

  return 0;
}
