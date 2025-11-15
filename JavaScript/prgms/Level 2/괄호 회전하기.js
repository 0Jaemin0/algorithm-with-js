function solution(s) {
  const str = s.split('');
  let count = 0;

  const check = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '[' || str[i] === '{' || str[i] === '(') {
        stack.push(str[i]);
      } else if (
        (str[i] === ']' && stack[stack.length - 1] === '[') ||
        (str[i] === '}' && stack[stack.length - 1] === '{') ||
        (str[i] === ')' && stack[stack.length - 1] === '(')
      ) {
        stack.pop();
      } else return false;
    }

    return stack.length ? false : true;
  };

  for (let i = 0; i < str.length; i++) {
    const rotation = [...str.slice(i), ...str.slice(0, i)];

    if (check(rotation)) count++;
  }

  return count;
}
