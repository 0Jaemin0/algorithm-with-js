function solution(schedules, timelogs, startday) {
  let result = 0;
  let employee = schedules.length;

  const formatTime = (time) => {
    const hour = Math.floor(time / 100) + Math.floor((time % 100) / 60);
    const minute = (time % 100) % 60;

    return hour * 100 + minute;
  };

  for (let i = 0; i < employee; i++) {
    const safeTime = formatTime(schedules[i] + 10);
    let day = startday;
    let successCount = 0;

    for (let j = 0; j < timelogs[i].length; j++) {
      const time = timelogs[i][j];

      if (day < 6 && time <= safeTime) successCount += 1;

      day = (day % 7) + 1;
    }

    result += successCount === 5 ? 1 : 0;
  }

  return result;
}
