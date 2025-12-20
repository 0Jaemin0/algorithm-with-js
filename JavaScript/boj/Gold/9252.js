const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];
const len = Math.max(str1.length, str2.length);
const dp = Array.from({ length: len + 1 }, () => new Array(len + 1).fill(0));
const result = [];
let row = len,
  col = len;

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len; j++) {
    if (str2[j - 1] === str1[i - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

while (dp[row][col] !== 0) {
  const now = dp[row][col];

  if (now === dp[row - 1][col]) row -= 1;
  else if (now === dp[row][col - 1]) col -= 1;
  else {
    result.push(str1[row - 1]);
    row -= 1;
    col -= 1;
  }
}

console.log(dp[len][len]);
console.log(result.reverse().join(''));
