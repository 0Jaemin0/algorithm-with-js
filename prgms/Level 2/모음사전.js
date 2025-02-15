const getPermutations = (arr, selectNumber) => {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => el);

  arr.forEach((fixed, _, origin) => {
    const permutation = getPermutations(origin, selectNumber - 1);
    const attached = permutation.map((el) => fixed + el);

    result.push(...attached);
  });

  return result;
};

function solution(word) {
  const result = [];
  const alphabet = ['A', 'E', 'I', 'O', 'U'];

  for (let i = 1; i <= alphabet.length; i++) {
    result.push(...getPermutations(alphabet, i));
  }

  result.sort();

  return result.indexOf(word) + 1;
}
