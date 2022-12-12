/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    // no root, then there's no values

    let total = this.root.val;
    // start with whatever the vaue of root is

    function addVals(node) {
      // will add values for children of a node
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          addVals(child);
          // call addVals on the child, which will call it again on any further children
        }
      }
    }
    addVals(this.root);
    // start at the top
    // starts with one child, then any children of that node will be the root in any subsequent recursive calls. once it gets down to a leaf, it goes back to the root of the tree and looks for further children of the root and goes down the line on those.
    return total;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;
    // start off with checking to see if root is even or not, if it is then that's 1

    function countEvenNodes(node) {
      for (let child of node.children) {
        // after the root, start checking the kids
        if (child.val % 2 === 0) count ++;
        if (child.children.length > 0) {
          countEvenNodes(child);
          // if the child has children then recurse with the child now as the root
        }
      }
    }

    countEvenNodes(this.root);
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countGreaterThan(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          countGreaterThan(child);
        }
      }
    }
    countGreaterThan(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
