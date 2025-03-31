function solution(numbers) {
  const result = numbers.map(String);
  result.sort((a, b) => b + a - (a + b));

  return result[0] === '0' ? '0' : result.join('');
}
