function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  people.sort((a, b) => a - b);

  while (left < right) {
    if (people[left] + people[right] > limit) right--;
    else {
      right--;
      left++;
      count++;
    }
  }

  return people.length - count;
}
