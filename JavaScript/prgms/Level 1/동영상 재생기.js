function solution(video_len, pos, op_start, op_end, commands) {
  const changeTime = (time) => {
    const [m, s] = time.split(':').map(Number);

    return m * 60 + s;
  };

  const videoEnd = changeTime(video_len);
  const opStart = changeTime(op_start);
  const opEnd = changeTime(op_end);
  let now = changeTime(pos);

  const checkOpTime = (time) => {
    if (opStart <= time && time <= opEnd) return opEnd;

    return time;
  };

  const checkVideoTime = (time) => {
    if (time < 0) return 0;
    if (time > videoEnd) return videoEnd;

    return time;
  };

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    now = checkOpTime(now);

    if (command === 'next') now += 10;
    else now -= 10;

    now = checkVideoTime(now);
  }

  now = checkOpTime(now);

  return `${String(Math.floor(now / 60)).padStart(2, '0')}:${String(now % 60).padStart(2, '0')}`;
}
