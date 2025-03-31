const getMoveCount = (alphabet) => {
  return alphabet.charCodeAt() < 78
    ? alphabet.charCodeAt() - 65
    : 91 - alphabet.charCodeAt();
};

function solution(name) {
  let result = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    result += getMoveCount(name[i]);
    let next = i + 1;

    while (next < name.length && name[next] === 'A') next += 1;

    min = Math.min(
      min,
      i * 2 + name.length - next,
      i + (name.length - next) * 2
    );
  }

  result += min;
  return result;
}
