/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function findShortestRoute(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findShortestRoute(node.right) + 1;
      if (node.right === null) return findShortestRoute(node.left) + 1;
      return (
        Math.min(findShortestRoute(node.left), findShortestRoute(node.right)) + 1
      );
    }
    // this is going to run until the conditions on line 23 are true. if they're true right away, great. if not, line 24 runs and if it's true (i.e. there's no left node), then the function is called recursively and we're back on line 23. if line 24 then comes back false, then line 25 runs. if line 25 is true, function is called recursively. back to line 23 continuously until it's true. 
    return findShortestRoute(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function findLongest(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findLongest(node.right) + 1;
      if (node.right === null) return findLongest(node.left) + 1;
      return (
        Math.max(findLongest(node.left), findLongest(node.right)) + 1
      );
    }

    return findLongest(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // using BFS - breadth first search
    let queue = [this.root];
    let closest = null;
    // closest will end up being the smallest value that's larger than lowerBound; starts as null

    while (queue.length) {
      let currentNode = queue.shift();
      // remove and return first element to compare 
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }
      // bigger than lowerBound and smaller than what was previously closest

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      // add more values to queue for comparison if there's any values left
    }

    return closest;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
