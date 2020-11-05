/*
  Minimum Height Trees
A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

 

Example 1:


Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
Example 2:


Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
Example 3:

Input: n = 1, edges = []
Output: [0]
Example 4:

Input: n = 2, edges = [[0,1]]
Output: [0,1]
 

Constraints:

1 <= n <= 2 * 104
edges.length == n - 1
0 <= ai, bi < n
ai != bi
All the pairs (ai, bi) are distinct.
The given input is guaranteed to be a tree and there will be no repeated edges.
   Hide Hint #1  
How many MHTs can a graph have at most?
*/
var findMinHeightTrees = function(n, edges) {
    if (n <= 0) {
        return [];
    }
    
    if (n == 1) {
        return [0];
    }
    
    const graph = Array.from({length: n}, () => Array());
    const inDegree = Array(n).fill(0);
    
    for (const edge of edges) {
        const vertex1 = edge[0];
        const vertex2 = edge[1];
        graph[vertex1].push(vertex2);
        graph[vertex2].push(vertex1);
        inDegree[vertex1]++;
        inDegree[vertex2]++;
    }
    
    const sources = [];
    inDegree.forEach((inDeg, vertex) => {
        if (inDeg == 1) {
            sources.push(vertex);
        }
    });
    
    let totalVertices = n;
    while (totalVertices > 2) {
        const len = sources.length;
        totalVertices -= len;
        for (let i = 0; i < len; i++) {
            const source = sources.shift();
            const children = graph[source];
            for (const child of children) {
                if (--inDegree[child] == 1) {
                    sources.push(child);
                }
            }
        }
    }
    
    return sources;
};
let edges = [[3,0],[3,1],[3,2],[3,4],[5,4]];
console.log(findMinHeightTrees(6,edges));