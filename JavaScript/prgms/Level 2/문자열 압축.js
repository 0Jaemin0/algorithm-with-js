function solution(s) {
  const len = s.length;
  let result = 1000;

  if (len == 1) return 1;

  for (let i = 1; i <= Math.floor(len / 2); i++) {
    const slicedWord = [];

    for (let j = 0; j < len; j += i) {
      slicedWord.push(s.substr(j, i));
    }

    let now = slicedWord[0];
    let count = 1;
    let str = '';
    for (let k = 1; k < slicedWord.length; k++) {
      if (now == slicedWord[k]) count++;
      else {
        str += count === 1 ? now : count + now;
        now = slicedWord[k];
        count = 1;
      }
    }

    str += count === 1 ? now : count + now;

    result = Math.min(result, str.length);
  }

  return result;
}
