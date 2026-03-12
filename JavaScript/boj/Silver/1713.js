const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const recommendCount = +input[1];
const studentNumber = input[2].split(' ').map(Number);
const photos = [];
const result = [];

for (let i = 0; i < recommendCount; i++) {
  const recommendNumber = studentNumber[i];
  let flag = false;

  for (let j = 0; j < photos.length; j++) {
    const [number, count, period] = photos[j];

    if (recommendNumber === number) {
      photos[j] = [number, count + 1, period];

      flag = true;
      break;
    }
  }

  if (!flag) {
    photos.length === N && photos.pop();
    photos.push([recommendNumber, 1, 0]);
  }

  photos.sort((a, b) => {
    if (a[1] === b[1]) return a[2] - b[2];
    else return b[1] - a[1];
  });

  photos.forEach((photo) => {
    photo[2]++;
  });
}

photos.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < photos.length; i++) result.push(photos[i][0]);

console.log(result.join(' '));
