/*
 Longest Mountain in Array
Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

B.length >= 3
There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
(Note that B could be any subarray of A, including the entire array A.)

Given an array A of integers, return the length of the longest mountain. 

Return 0 if there is no mountain.

Example 1:

Input: [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: [2,2,2]
Output: 0
Explanation: There is no mountain.
Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000
Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?

*/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let res =0;
    let n = A.length;
    for(let i=0;i<n;i++){
        let count =1;
        let j=i;
        let flag = false;
        //increasing order
        while(j<n && A[j]>A[j-1]){
            j++;
            count++;
        }
        //decreasing order
        while(i!=j && j<n && A[j]<A[j-1]){
            j++;
            count++;
            flag=true;
        }
        //get length
        if(i!=j && flag && count>2){
            res = Math.max(res,count);
            j--;
        }

    }
    return res;
    


};
let arr=[2,1,4,7,3,2,5];
let arr1=[2,2,2];
let arr2=[1,2,3,4,5,6];
console.log(longestMountain(arr2));