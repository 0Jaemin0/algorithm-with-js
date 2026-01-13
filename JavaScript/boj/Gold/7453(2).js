const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const A = new Array(n);
const B = new Array(n);
const C = new Array(n);
const D = new Array(n);
const AB = new Int32Array(n * n);
const CD = new Int32Array(n * n);
let result = 0;
let left = 0;
let right = n * n - 1;
let idx = 0;

for (let i = 1; i <= n; i++) {
  const numbers = input[i].split(' ').map(Number);

  A[i - 1] = numbers[0];
  B[i - 1] = numbers[1];
  C[i - 1] = numbers[2];
  D[i - 1] = numbers[3];
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    AB[idx] = A[i] + B[j];
    CD[idx++] = C[i] + D[j];
  }
}

AB.sort();
CD.sort();

while (left < n * n && right >= 0) {
  const sum = AB[left] + CD[right];

  if (sum === 0) {
    let l = AB[left];
    let r = CD[right];
    let lCount = 0;
    let rCount = 0;

    while (left < n * n && l === AB[left]) {
      lCount++;
      left++;
    }

    while (right >= 0 && r === CD[right]) {
      rCount++;
      right--;
    }

    result += lCount * rCount;
  } else if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(result);
