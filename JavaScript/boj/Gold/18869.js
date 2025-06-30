const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const result = [];
let count = 0;

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

for (let i = 0; i < M; i++) {
  const universe = input[i].split(' ').map(Number);
  const sorted = [...new Set(universe)].sort((a, b) => a - b);
  const compressed = universe.map((val) => binarySearch(sorted, val));

  result.push(compressed);
}

for (let i = 0; i < M; i++) {
  for (let j = i + 1; j < M; j++) {
    let isSame = true;

    for (let k = 0; k < N; k++) {
      if (result[i][k] !== result[j][k]) {
        isSame = false;
        break;
      }
    }

    if (isSame) count++;
  }
}

console.log(count);
