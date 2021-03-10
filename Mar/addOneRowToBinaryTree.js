/*Add One Row to Tree

Solution
Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d. The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes with value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root. If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the original tree is the new root's left subtree.

Example 1:
Input: 
A binary tree as following:
       4
     /   \
    2     6
   / \   / 
  3   1 5   

v = 1

d = 2

Output: 
       4
      / \
     1   1
    /     \
   2       6
  / \     / 
 3   1   5   

Example 2:
Input: 
A binary tree as following:
      4
     /   
    2    
   / \   
  3   1    

v = 1

d = 3

Output: 
      4
     /   
    2
   / \    
  1   1
 /     \  
3       1
Note:
The given d is in range [1, maximum depth of the given tree + 1].
The given binary tree has at least one tree node.
JavaScript	
1
/**
2
 * Definition for a binary tree node.
3
 * function TreeNode(val, left, right) {
4
 *     this.val = (val===undefined ? 0 : val)
5
 *     this.left = (left===undefined ? null : left)
6
 *     this.right = (right===undefined ? null : right)
7
 * }
8
 */

/**
10
 * @param {TreeNode} root
11
 * @param {number} v
12
 * @param {number} d
13
 * @return {TreeNode}
14
 */

var addOneRow = function (root, v, d) {
    
    if (d === 1) root = new TreeNode(v, root);
    
    let dfs = (node, level = 1) => {
        
        if (!node) return
    
        if (level === d - 1) {
            
            node.left = new TreeNode(v, node.left)
            
            node.right = new TreeNode(v, null, node.right)
            
        }
        
        dfs(node.left, level + 1)
        
        dfs(node.right, level + 1)
        
    }
    
    dfs(root)
    
    return root;
    
};

var addOneRow2 = function (root, v, d, dir = 'left') {
    if (d === 1) {
        const node = new TreeNode(v);
        [root, node[dir]] = [node, root]
    } else if (root) {
        root.left = addOneRow2(root.left, v, d - 1, 'left')
        root.right = addOneRow2(root.right, v, d - 1, 'right')
    }
    return root
};