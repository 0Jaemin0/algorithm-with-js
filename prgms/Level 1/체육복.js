function solution(n, lost, reserve) {
  const students = Array.from({ length: n + 1 }, () => 1);

  for (let i = 0; i < lost.length; i++) students[lost[i]] -= 1;
  for (let i = 0; i < reserve.length; i++) students[reserve[i]] += 1;

  lost
    .sort((a, b) => a - b)
    .forEach((lost) => {
      if (students[lost] === 0) {
        if (lost - 1 > 0 && students[lost - 1] > 1) {
          students[lost - 1] -= 1;
          students[lost] += 1;
        } else if (lost + 1 <= n && students[lost + 1] > 1) {
          students[lost + 1] -= 1;
          students[lost] += 1;
        }
      }
    });

  return students.filter((el) => el > 0).length - 1;
}
