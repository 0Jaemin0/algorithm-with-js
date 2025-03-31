function solution(brown, yellow) {
  const totalCount = brown + yellow;
  const width = [];

  for (let i = 1; i <= Math.sqrt(totalCount); i++) {
    if (totalCount % i === 0) width.push([totalCount / i, i]);
  }

  for (let j = 0; j < width.length; j++) {
    if ((width[j][0] - 2) * (width[j][1] - 2) === yellow) {
      return width[j];
    }
  }
}
