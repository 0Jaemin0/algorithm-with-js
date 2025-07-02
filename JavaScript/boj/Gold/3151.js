const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const students = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < N - 2; i++) {
  let left = i + 1;
  let right = N - 1;

  while (left < right) {
    const sum = students[i] + students[left] + students[right];

    if (sum === 0) {
      if (students[left] === students[right]) {
        const n = right - left + 1;
        count += (n * (n - 1)) / 2;
        break;
      } else {
        let leftCount = 1;
        let rightCount = 1;

        while (students[left] === students[left + 1]) {
          leftCount++;
          left++;
        }

        while (students[right] === students[right - 1]) {
          rightCount++;
          right--;
        }

        count += leftCount * rightCount;
        left++;
        right--;
      }
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(count);
