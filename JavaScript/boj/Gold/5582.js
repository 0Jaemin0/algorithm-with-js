const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];
const dp = Array.from({ length: str1.length + 1 }, () =>
  new Array(str2.length + 1).fill(0)
);
let result = 0;

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      result = Math.max(result, dp[i][j]);
    }
  }
}

console.log(result);
