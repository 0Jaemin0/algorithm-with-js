const dfs = (numbers, target, count, sum) => {
  if (count === numbers.length) return sum === target ? 1 : 0;

  return (
    dfs(numbers, target, count + 1, sum + numbers[count]) +
    dfs(numbers, target, count + 1, sum + numbers[count] * -1)
  );
};

function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}
