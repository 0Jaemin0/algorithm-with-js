const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const tree = Array.from({ length: N }, () => new Array(2));
const result = [];
let str = '';

for (let i = 0; i < N; i++) {
  const [parent, left, right] = input[i].split(' ');

  tree[parent.charCodeAt() - 65][0] =
    left !== '.' ? left.charCodeAt() - 65 : null;
  tree[parent.charCodeAt() - 65][1] =
    right !== '.' ? right.charCodeAt() - 65 : null;
}

const reset = () => {
  result.push(str);
  str = '';
};

const preOrder = (node) => {
  str += String.fromCharCode(65 + node);

  if (tree[node][0] !== null) preOrder(tree[node][0]);
  if (tree[node][1] !== null) preOrder(tree[node][1]);
  if (str.length === +N) reset();
};

const inOrder = (node) => {
  if (tree[node][0] !== null) inOrder(tree[node][0]);

  str += String.fromCharCode(65 + node);

  if (tree[node][1] !== null) inOrder(tree[node][1]);
  if (str.length === +N) reset();
};

const postOrder = (node) => {
  if (tree[node][0] !== null) postOrder(tree[node][0]);
  if (tree[node][1] !== null) postOrder(tree[node][1]);

  str += String.fromCharCode(65 + node);

  if (str.length === +N) reset();
};

preOrder(0);
inOrder(0);
postOrder(0);
console.log(result.join('\n'));
