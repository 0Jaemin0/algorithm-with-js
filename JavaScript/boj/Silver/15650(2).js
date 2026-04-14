const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = Array.from({ length: N }, (_, i) => i + 1);

const getPermutation = (arr, selectNumber) => {
  const results = [];

  const backtack = (current, visited) => {
    if (current.length === selectNumber) {
      results.push([...current]);

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i] || current[current.length - 1] >= arr[i]) continue;

      visited[i] = true;
      current.push(arr[i]);
      backtack(current, visited);
      visited[i] = false;
      current.pop();
    }
  };

  backtack([], new Array(N + 1).fill(false));

  return results;
};

const permutation = getPermutation(numbers, M);

console.log(permutation.map((list) => list.join(' ')).join('\n'));
