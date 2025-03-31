const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const separator = [' '];
const string = input[7];

const checkSeparator = (separatorList) => {
  const merge = input[5].split(' ');

  for (let i = 0; i < separatorList.length; i++) {
    if (merge.includes(separatorList[i])) continue;
    else separator.push(separatorList[i]);
  }
};

checkSeparator(input[1].split(' '));
checkSeparator(input[3].split(' '));

const result = string
  .split(new RegExp(separator.join('|'), 'g'))
  .filter(Boolean);

console.log(result.join('\n'));
