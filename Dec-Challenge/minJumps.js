/*
Jump Game IV

Solution
Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
Example 2:

Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You don't need to jump.
Example 3:

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
Example 4:

Input: arr = [6,1,9]
Output: 2
Example 5:

Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
Output: 3
 

Constraints:

1 <= arr.length <= 5 * 10^4
-10^8 <= arr[i] <= 10^8
   Hide Hint #1  
Build a graph of n nodes where nodes are the indices of the array and edges for node i are nodes i+1, i-1, j where arr[i] == arr[j].
   Hide Hint #2  
Start bfs from node 0 and keep distance, answer is the distance when you reach onode n-1.
*/

let minJumps = (A, m = {}, q = [0], seen = new Set([0]), hops = 0) => {
    let N = A.length;
    A.forEach((x, i) => {
        if (!m[x])
            m[x] = [];
        m[x].push(i);
    });
    while (q.length > 0) {
        let K = q.length;
        while (K--) {
            let i = q[0], x = A[i]; q.shift();
            if (i + 1 == N)
                return hops;
            m[x].push(i - 1);
            m[x].push(i + 1);
            for (let j of m[x])
                if (0 <= j && j < N && !seen.has(j))
                    q.push(j), seen.add(j);
            m[x] = []; // avoid TLE by only jumping once per unique value
        }
        ++hops;
    }
    return -1;
};

let arr = [100,-23,-23,404,100,23,23,23,3,404];
console.log(minJumps(arr));