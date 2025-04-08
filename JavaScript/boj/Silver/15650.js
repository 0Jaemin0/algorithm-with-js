const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numbers = Array.from({ length: N }, (_, i) => i + 1);

const getCombination = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)];
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
};

const combinations = getCombination(numbers, M);
combinations.forEach((el) => {
  console.log(el.join(' '));
});
