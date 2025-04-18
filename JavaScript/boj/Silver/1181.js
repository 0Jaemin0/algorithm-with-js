const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const words = [...new Set(input)];

words.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  return a.length - b.length;
});

console.log(words.join('\n'));
