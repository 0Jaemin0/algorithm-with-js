const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor(index / 2);

    while (
      this.heap[parentIdx] != null &&
      this.heap[index] < this.heap[parentIdx]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor(index / 2);
    }
  }

  bubbleDown() {
    let index = 1;
    let leftIdx = index * 2;
    let rightIdx = index * 2 + 1;

    while (
      (this.heap[leftIdx] != null && this.heap[leftIdx] < this.heap[index]) ||
      (this.heap[rightIdx] != null && this.heap[rightIdx] < this.heap[index])
    ) {
      let smallerIdx = leftIdx;

      if (
        this.heap[rightIdx] != null &&
        this.heap[rightIdx] < this.heap[smallerIdx]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2;
      rightIdx = index * 2 + 1;
    }
  }
}

const N = +input[0];
const classes = input.slice(1).map((c) => c.split(' ').map(Number));
const minHeap = new MinHeap();
classes.sort((a, b) => a[0] - b[0]);
minHeap.add(classes[0][1]);

for (let i = 1; i < N; i++) {
  const [startTime, endTime] = classes[i];

  if (minHeap.heap[1] <= startTime) minHeap.poll();

  minHeap.add(endTime);
}

console.log(minHeap.size());
