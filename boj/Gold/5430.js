const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < T; i++) {
  let isReverse = false;
  let flag = false;
  let [p, n, arr] = input.slice(i * 3, i * 3 + 3);
  arr = arr.length > 2 ? arr.slice(1, -1).split(',').map(Number) : [];

  for (let j = 0; j < p.length; j++) {
    if (p[j] === 'R') isReverse = !isReverse;
    else if (!arr.length) {
      flag = true;
      break;
    } else if (isReverse) arr.pop();
    else arr.shift();
  }

  if (flag) result.push('error');
  else isReverse ? result.push(arr.reverse()) : result.push(arr);
}

for (let i = 0; i < result.length; i++) {
  if (result[i] !== 'error' && result[i].length) {
    console.log(`[${result[i].join(',')}]`);
  } else console.log(result[i]);
}
