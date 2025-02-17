const getParent = (parent, x) => {
  if (parent[x] === x) return x;

  return parent[x] === x ? x : (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, x, y) => {
  const p1 = getParent(parent, x);
  const p2 = getParent(parent, y);

  return p1 < p2 ? (parent[p2] = p1) : (parent[p1] = p2);
};

const findParent = (parent, x, y) => {
  const p1 = getParent(parent, x);
  const p2 = getParent(parent, y);

  return p1 === p2 ? true : false;
};

function solution(n, costs) {
  const parent = Array.from({ length: n }, (_, i) => i);
  let totalCost = 0;

  costs.sort((a, b) => a[2] - b[2]);

  costs.forEach(([start, end, cost]) => {
    if (!findParent(parent, start, end)) {
      unionParent(parent, start, end);
      totalCost += cost;
    }
  });

  return totalCost;
}
