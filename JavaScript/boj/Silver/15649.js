const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const list = Array.from({ length: N }, (_, i) => i + 1);

const getPermutation = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = getPermutation(rest, selectNum - 1);
    const attached = permutation.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
};

const permutations = getPermutation(list, M);
permutations.forEach((el) => {
  console.log(el.join(' '));
});
