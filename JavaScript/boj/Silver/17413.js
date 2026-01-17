const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = input[0];
const words = [];
let str = '';

for (let i = 0; i < S.length; i++) {
  if (S[i] === '<') {
    while (S[i] !== '>') {
      str += S[i];
      i++;
    }

    str += S[i];
  } else {
    while (S[i] !== ' ' && S[i] !== '<' && i < S.length) {
      str += S[i];
      i++;
    }
  }

  words.push(str);

  S[i] === ' ' && words.push(' ');
  S[i] === '<' && i--;
  str = '';
}

for (let i = 0; i < words.length; i++) {
  if (words[i][0] !== '<') words[i] = words[i].split('').reverse().join('');
}

console.log(words.join(''));
