function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, index] = commands[i];
    const sliceArray = array.slice(start - 1, end).sort((a, b) => a - b);
    result.push(sliceArray[index - 1]);
  }

  return result;
}
