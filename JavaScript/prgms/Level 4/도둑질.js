function solution(money) {
  const dp1 = Array.from({ length: money.length });
  const dp2 = Array.from({ length: money.length });

  dp1[0] = money[0];
  dp1[1] = money[0];

  for (let i = 2; i < money.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
  }

  dp2[0] = 0;
  dp2[1] = money[1];

  for (let i = 2; i < money.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1]);
  }

  return Math.max(dp1[money.length - 2], dp2[money.length - 1]);
}
