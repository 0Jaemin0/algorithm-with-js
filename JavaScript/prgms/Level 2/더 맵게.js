class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp(value);
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      this.heap[parentIndex] &&
      this.heap[index] < this.heap[parentIndex]
    ) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rigthIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[index] > this.heap[leftIdx]) ||
      (this.heap[rigthIdx] && this.heap[index] > this.heap[rigthIdx])
    ) {
      let changeInx = leftIdx;
      if (this.heap[rigthIdx] && this.heap[changeInx] > this.heap[rigthIdx])
        changeInx = rigthIdx;

      this.swap(index, changeInx);
      index = changeInx;
      leftIdx = index * 2 + 1;
      rigthIdx = index * 2 + 2;
    }
  }

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let count = 0;

  for (let i = 0; i < scoville.length; i++) {
    minHeap.add(scoville[i]);
  }

  while (minHeap.top() < K && minHeap.size() > 1) {
    minHeap.add(minHeap.poll() + minHeap.poll() * 2);
    count++;
  }

  return minHeap.top() < K ? -1 : count;
}
