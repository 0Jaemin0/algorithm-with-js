function solution(prices) {
  const result = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const donwIndex = stack.pop();
      result[donwIndex] = i - donwIndex;
    }

    stack.push(i);
  }

  while (stack.length) {
    const index = stack.pop();
    result[index] = prices.length - index - 1;
  }

  return result;
}
