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
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left) return minDepth(root.right)+1;
    if(!root.right) return minDepth(root.left)+1;
    return Math.min(minDepth(root.right), minDepth(root.left))+1;

};
var maxDepth = function(root) {
  if(root==null) return 0;
 if(!root.left) return maxDepth(root.right)+1;
 if(!root.right) return maxDepth(root.left)+1;
 return Math.max(maxDepth(root.right),maxDepth(root.left))+1
};
var maxAncestorDiff = function(root) {
  let sum =0;
  traverse(root);
  function traverse(root){
    if(!root) return 0;
    let left = traverse(root.left);
    let right = traverse(root.right);
    sum = Math.max(right-left, sum);
  }
  return sum;

}; 
console.log(tree);
console.log(minDepth(tree));
console.log(maxAncestorDiff(tree));