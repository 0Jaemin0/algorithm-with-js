function solution(arr) {
  const operandCount = Math.ceil(arr.length / 2);
  const maxDP = Array.from({ length: operandCount }, () =>
    new Array(operandCount).fill(-Infinity)
  );
  const minDP = Array.from({ length: operandCount }, () =>
    new Array(operandCount).fill(Infinity)
  );

  for (let i = 0; i < operandCount; i++) {
    maxDP[i][i] = +arr[i * 2];
    minDP[i][i] = +arr[i * 2];
  }

  for (let i = 1; i < operandCount; i++) {
    for (let j = 0; j < operandCount - i; j++) {
      const k = j + i;

      for (let l = j; l < k; l++) {
        const operator = arr[l * 2 + 1];

        if (operator === '+') {
          maxDP[j][k] = Math.max(maxDP[j][k], maxDP[j][l] + maxDP[l + 1][k]);
          minDP[j][k] = Math.min(minDP[j][k], minDP[j][l] + minDP[l + 1][k]);
        } else {
          maxDP[j][k] = Math.max(maxDP[j][k], maxDP[j][l] - minDP[l + 1][k]);
          minDP[j][k] = Math.min(minDP[j][k], minDP[j][l] - maxDP[l + 1][k]);
        }
      }
    }
  }

  return maxDP[0][operandCount - 1];
}
