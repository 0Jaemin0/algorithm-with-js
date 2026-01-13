const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const count = Array.from({ length: Math.max(...numbers) + 1 }, () => 0);
let result = 0;
let left = 0;
let right = 0;

while (right < N) {
  if (count[numbers[right]] < K) {
    count[numbers[right]]++;
    right++;
  } else {
    count[numbers[left]]--;
    left++;
  }

  result = Math.max(result, right - left);
}

console.log(result);
