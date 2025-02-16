function solution(number, k) {
  const result = [];

  for (let i = 0; i < number.length; i++) {
    while (
      k > 0 &&
      result.length > 0 &&
      result[result.length - 1] < number[i]
    ) {
      result.pop();
      k--;
    }

    result.push(number[i]);
  }

  return result.slice(0, number.length - k).join('');
}
