const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const eggs = input.map((egg) => egg.split(' ').map(Number));
let result = 0;

const dfs = (now) => {
  let pass = true;

  if (now === +N) {
    let count = 0;

    eggs.forEach(([d, w]) => {
      if (d <= 0) count++;
    });
    result = Math.max(result, count);

    return;
  }

  for (let i = 0; i < +N; i++) {
    if (eggs[now][0] <= 0 || eggs[i][0] <= 0 || i === now) continue;

    pass = false;
    eggs[now][0] -= eggs[i][1];
    eggs[i][0] -= eggs[now][1];
    dfs(now + 1);
    eggs[now][0] += eggs[i][1];
    eggs[i][0] += eggs[now][1];
  }

  if (pass) dfs(now + 1);
};

dfs(0);
console.log(result);
