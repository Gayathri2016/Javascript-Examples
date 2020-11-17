/*
Range Sum of BST

Solution
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
 

Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum =0;
    traverse(root, low,high);
    function traverse(root, low,high){
    if(!root) return 0;
    
    if(root.val >=low && root.val <=high)
      sum+=root.val;
    else if(root.leftNode >=low && root.leftNode <=high)
      sum+=root.leftNode
    else if(root.rightNode>=low && root.rightNode <=high)
      sum+=root.rightNode
      
    traverse(root.leftNode, low,high);
    traverse(root.rightNode,low,high);
      
   }
    
    return sum;
};
var rangeSumBST1 = function(node, low, high) 
{
        let lsum=0, rsum = 0, nval = (node.val < low || node.val > high) ? 0 : node.val;
        if(node.left && node.val > low)
                lsum = rangeSumBST(node.left, low, high);
        if(node.right && node.val < high)
                rsum = rangeSumBST(node.right, low, high);
        
        return lsum + rsum + nval;
};
const rangeSumBST2 = function(root, low, high) {
    if (root === null) return 0;
    const sum = rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    return root.val >= low && root.val <= high ? root.val + sum: sum;
};

class TreeNode {
    constructor(val, leftNode, rightNode) {
      this.val = val;
      this.leftNode = leftNode;
      this.rightNode = rightNode;
    }
  
}
let tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4, null, null), null),
    new TreeNode(
      3,
      new TreeNode(5, new TreeNode(7, null, null), null),
      new TreeNode(6, null, new TreeNode(8, null, null))
    )
  );
  let tree1=new TreeNode(10,
  new TreeNode(5, new TreeNode(3, null, null), new TreeNode(7,null,null)), 
  new TreeNode(15,null, new TreeNode(18,null,null)
  )
  );
  console.log(rangeSumBST(tree1,7,15));