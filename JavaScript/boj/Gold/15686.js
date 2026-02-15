const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const houses = [];
const chickens = [];
let result = Infinity;

for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ').map(Number);

  for (let j = 0; j < N; j++) {
    if (line[j] === 1) houses.push([i - 1, j]);
    else if (line[j] === 2) chickens.push([i - 1, j]);
  }
}

const getCombination = (arr, selectNumber) => {
  const results = [];

  const backtrack = (start, current) => {
    if (current.length === selectNumber) {
      results.push([...current]);

      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(0, []);

  return results;
};

const combi = getCombination(chickens, M);

const calculateDistance = (startX, startY, endX, endY) => {
  const x = Math.abs(startX - endX);
  const y = Math.abs(startY - endY);

  return x + y;
};

for (let i = 0; i < combi.length; i++) {
  const select = combi[i];
  let sum = 0;

  for (let j = 0; j < houses.length; j++) {
    const [startX, startY] = houses[j];
    let min = 2 * N;

    for (let k = 0; k < select.length; k++) {
      const [endX, endY] = select[k];

      min = Math.min(min, calculateDistance(startX, startY, endX, endY));
    }

    sum += min;
  }

  result = Math.min(result, sum);
}

console.log(result);
