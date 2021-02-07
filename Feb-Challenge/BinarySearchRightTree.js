/*
199. Binary Tree Right Side View
Medium

3428

182

Add to List

Share
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
Idea:

A problem dealing with tree traversal typically means a breadth first search or a depth first search approach. Since we're tasked with isolating a value from each level, this would naturally bring to mind the BFS approach... but let's keep DFS on the back burner; we'll come back to it.

A BFS approach usually entails the use of a queue (q) where we push each node's children onto q while we move along a level of the tree from one side to the other. This ensures that when each level is completed, we have the next level ready to go in q. In order to separate each level, since we're continuously adding to q, we can just take the length of q at the beginning of each level to figure out when the next one begins.

In this case, we can run our BFS from right to left and simply push the first value of each level in our answer array (ans) before returning the array upon complete traversal of the tree.

But what about the DFS approach? DFS solutions often allow us to find a concise, recursive solution, and while they're not always the first thought when it comes to tree traversal problems where the level is important, in this case we don't need the level as a whole, we just need one end of each level.

This means that we can define a recursive function (dfs) to run through the nodes from left to right and simply overwrite the value for each level (ans[lvl]) as we get to each node, since the last value from left to right on each level will be the one we want to keep.
*/

var rightSideView = function(root) {
    let ans = []
    const dfs = (node, lvl) => {
        if (!node) return
        ans[lvl] = node.val
        dfs(node.left, lvl+1)
        dfs(node.right, lvl+1)
    }
    dfs(root, 0)
    return ans
};