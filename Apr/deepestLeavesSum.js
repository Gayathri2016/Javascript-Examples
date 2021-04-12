/*
  Deepest Leaves Sum
  Given the root of a binary tree,
      return the sum of values of its deepest leaves.


  Example 1:


      Input: root = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]
  Output: 15
  Example 2:

      Input: root = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]
  Output: 19
    Hide Hint #1  
Traverse the tree to find the max depth.
   Hide Hint # 2
    Traverse the tree again to compute the sum required.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function (root) {
    return depthOfLeavesSum(root, depth(root));
};

var depthOfLeavesSum = function(node, height){
    if (!node) return 0;
    if (height === 1) return node.val;
    return depthOfLeavesSum(node.left, height - 1) + depthOfLeavesSum(node.right, height - 1);
}
var depth = function (root) {
    if (root == null) return 0;
    if(!root.left) return depth(root.right)+1
    if(!root.right) return depth(root.left)+1
    return Math.max(depth(root.right), depth(root.left))+1
};