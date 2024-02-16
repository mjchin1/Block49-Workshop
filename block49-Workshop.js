//Question 1

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorder(root) {
  let current = root;
  let stack = [];
  let result = [];
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.value);
    current = current.right;
  }
  return result;
}

class BinaryTree {
  constructor(data = []) {
    this.root = null;
    data.forEach((value) => this.insert(value));
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (!current.left && !current.right) {
        current.left = newNode;
        return this;
      }
      if (!current.right) {
        current.right = newNode;
        return this;
      }
      current = current.left;
    }
  }

  inorder() {
    return inorder(this.root);
  }
}

const input = [1, 2, 3, 4, 5];
const binaryTree = new BinaryTree(input);
console.log(binaryTree.inorder());

//Question 2

function isSameTree(input, output) {
  const inputOrder = inorder(input.root);
  const outputOrder = inorder(output.root);

  return (
    inputOrder.length === outputOrder.length &&
    inputOrder.every((val, idx) => val === outputOrder[idx])
  );
}

const input1 = [1, 2, 3, 4, 5, 6, 7, 8];
const input2 = [1, 2, 3, 4, 5, 6, 7, 8];
const binaryTree1 = new BinaryTree(input1);
const binaryTree2 = new BinaryTree(input2);
console.log(isSameTree(binaryTree1, binaryTree2));

//Question 3

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countNodes(root) {
  if (!root) return 0;

  let leftDepth = 0;
  let rightDepth = 0;
  let leftNode = root;
  let rightNode = root;

  while (leftNode) {
    leftDepth++;
    leftNode = leftNode.left;
  }
  while (rightNode) {
    rightDepth++;
    rightNode = rightNode.right;
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}

const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

console.log(countNodes(root));

//Question 4

function searchBottomLeftValue(root) {
  const currentLevel = 0;
  const result = { level: currentLevel, value: root.value };
  function bottomLeftValue(node, level, result) {
    if (!node) return;
    if (level > result.level) {
      result.level = level;
      result.value = node.value;
    }
    bottomLeftValue(node.left, level + 1, result);
    bottomLeftValue(node.right, level + 1, result);
  }
  bottomLeftValue(root, 0, result);
  return result.value;
}

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.right.left = new TreeNode(5);
root2.right.left.left = new TreeNode(6);

console.log(searchBottomLeftValue(root2));
