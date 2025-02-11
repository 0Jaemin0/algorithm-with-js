function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [];
  const result = [];
  let max = 0;

  students.forEach((student) => {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
      if (student[i % student.length] === answers[i]) score++;
    }

    scores.push(score);
  });

  max = Math.max(...scores);
  scores.forEach((score, index) => {
    if (score === max) result.push(index + 1);
  });

  return result;
}
