/*
Increasing Order Search Tree

Solution
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

Example 1:


Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
Example 2:


Input: root = [5,1,7]
Output: [1,null,5,null,7]
 

Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000

*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  
  var increasingBST = function(root) {
      if(root == null) return null;
      let head = new TreeNode();
      let tmp=head;
      function inorder(root){
         if(root){
          inorder(root.left);
          tmp.right = new TreeNode(root.val);
          tmp = tmp.right;
          inorder(root.right);
        }
    }
    inorder(root);
    return head.right;
  };
  
  let tree1=new TreeNode(5,
    new TreeNode(1, null,null), 
    new TreeNode(7,null, null)
    );
    
   console.log(increasingBST(tree1));