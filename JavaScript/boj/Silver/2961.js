const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const ingredient = [];
const foods = [];
const numbers = Array.from({ length: N }, (_, idx) => idx + 1);
let result = Infinity;

for (let i = 1; i <= N; i++) ingredient.push(input[i].split(' ').map(Number));

const getCombinations = (arr, selectNumber) => {
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

for (let i = 1; i <= N; i++) foods.push(...getCombinations(numbers, i));

for (let i = 0; i < foods.length; i++) {
  let sour = 1;
  let bitter = 0;

  for (let j = 0; j < foods[i].length; j++) {
    const number = foods[i][j];
    const [s, b] = ingredient[number - 1];

    sour *= s;
    bitter += b;
  }

  result = Math.min(result, Math.abs(sour - bitter));
}

console.log(result);
