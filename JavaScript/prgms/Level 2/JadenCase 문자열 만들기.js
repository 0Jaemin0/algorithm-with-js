function solution(s) {
  const str = s.split(' ');
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const word = str[i];

    if (!word.length) {
      result += ' ';
      continue;
    }

    result += word[0].toUpperCase();

    for (let j = 1; j < word.length; j++) {
      result += word[j].toLowerCase();
    }

    result += ' ';
  }

  return result.slice(0, result.length - 1);
}
