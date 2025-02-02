function solution(progresses, speeds) {
  const result = [];
  const finishDay = [];

  for (let i = 0; i < progresses.length; i++) {
    finishDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  while (finishDay.length > 0) {
    const day = finishDay.shift();
    let count = 1;

    while (finishDay.length > 0 && day >= finishDay[0]) {
      finishDay.shift();
      count++;
    }

    result.push(count);
  }

  return result;
}
