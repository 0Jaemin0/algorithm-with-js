function solution(genres, plays) {
  const sings = {};
  const playCountSum = {};
  const result = [];

  for (let i = 0; i < genres.length; i++) {
    if (genres[i] in sings) {
      sings[genres[i]].push([i, plays[i]]);
      playCountSum[genres[i]] += plays[i];
    } else {
      sings[genres[i]] = [[i, plays[i]]];
      playCountSum[genres[i]] = plays[i];
    }
  }

  const sortPlayCountSum = Object.keys(playCountSum).sort(
    (a, b) => playCountSum[b] - playCountSum[a]
  );

  sortPlayCountSum.forEach((genre) => {
    const best = sings[genre]
      .sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return b[1] - a[1];
      })
      .slice(0, 2);

    best.forEach((sing) => {
      result.push(sing[0]);
    });
  });

  return result;
}
