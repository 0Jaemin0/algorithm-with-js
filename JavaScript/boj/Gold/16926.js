const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const layer = Math.floor(Math.min(N, M) / 2);
const depth = [];
const list = [];
const result = Array.from({ length: N }, () => Array(M));

for (let i = 1; i <= N; i++) list.push(input[i].split(' ').map(Number));

for (let i = 0; i < layer; i++) {
  const arr = [];
  const top = i;
  const left = i;
  const bottom = N - 1 - i;
  const right = M - 1 - i;

  for (let j = left; j <= right; j++) arr.push(list[top][j]);
  for (let j = top + 1; j <= bottom - 1; j++) arr.push(list[j][right]);
  for (let j = right; j >= left; j--) arr.push(list[bottom][j]);
  for (let j = bottom - 1; j >= top + 1; j--) arr.push(list[j][left]);

  depth.push(arr);
}

for (let i = 0; i < depth.length; i++) {
  const len = depth[i].length;
  const r = R % len;

  depth[i] = [...depth[i].slice(r), ...depth[i].slice(0, r)];
}

for (let i = 0; i < layer; i++) {
  const arr = depth[i];
  let idx = 0;
  const top = i;
  const left = i;
  const bottom = N - 1 - i;
  const right = M - 1 - i;

  for (let j = left; j <= right; j++) result[top][j] = arr[idx++];
  for (let j = top + 1; j <= bottom - 1; j++) result[j][right] = arr[idx++];
  for (let j = right; j >= left; j--) result[bottom][j] = arr[idx++];
  for (let j = bottom - 1; j >= top + 1; j--) result[j][left] = arr[idx++];
}

for (let i = 0; i < N; i++) console.log(result[i].join(' '));
