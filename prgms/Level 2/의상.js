function solution(clothes) {
  const obj = {};
  let combinations = 1;

  clothes.forEach((clothe) => {
    const type = clothe[1];

    if (type in obj) obj[type] += 1;
    else obj[type] = 1;
  });

  Object.values(obj).forEach((count) => {
    combinations *= count + 1;
  });

  return combinations - 1;
}
