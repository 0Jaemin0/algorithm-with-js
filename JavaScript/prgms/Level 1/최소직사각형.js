function solution(sizes) {
  let w = 0;
  let h = 0;

  sizes.forEach((size) => size.sort((a, b) => b - a));
  sizes.forEach((size) => {
    if (size[0] > w) w = size[0];
    if (size[1] > h) h = size[1];
  });

  return w * h;
}
