const getPermutations = (array, selectNumber) => {
  const result = [];

  if (selectNumber === 1) return array.map((el) => el);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => fixed + el);

    result.push(...attached);
  });

  return result;
};

const getCount = (permutations, max) => {
  let count = 0;
  const array = new Array(max + 1).fill(true);

  array[0] = array[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (array[i]) {
      for (let j = i * i; j <= max; j += i) array[j] = false;
    }
  }

  permutations.forEach((el) => {
    if (array[el]) count++;
  });

  return count;
};

function solution(numbers) {
  let result = [];
  let max = 0;

  for (let i = 1; i < numbers.length + 1; i++) {
    result.push(...getPermutations(numbers.split(''), i));
  }

  result = [...new Set(result.map((el) => Number(el)))];
  max = Math.max(...result);

  return getCount(result, max);
}
