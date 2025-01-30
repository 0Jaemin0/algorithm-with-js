const fs = require('fs');
// 런타임 에러(EACCES) 해결을 위해 readFileSync의 경로 변경
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const logs = {};

for (let i = 0; i < input.length - 1; i++) {
  const [submitTime, questionName, submitResult] = input[i].split(' ');

  if (questionName in logs)
    logs[questionName] = [submitTime, submitResult, logs[questionName][2] + 1];
  else logs[questionName] = [submitTime, submitResult, 0];
}

let solvedCount = 0;
let totalTime = 0;

Object.values(logs).forEach((log) => {
  const [time, result, count] = log;

  if (result === 'right') {
    solvedCount += 1;
    totalTime += Number(time) + count * 20;
  }
});

console.log(solvedCount, totalTime);
