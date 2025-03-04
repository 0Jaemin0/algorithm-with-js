const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const A = input.split(' ').map(Number);
const lis = [];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};

for (let i = 0; i < A.length; i++) {
  if (lis.length === 0 || lis[lis.length - 1] < A[i]) {
    lis.push(A[i]);
  } else {
    const index = binarySearch(lis, A[i]);
    lis[index] = A[i];
  }
}

console.log(lis.length);
