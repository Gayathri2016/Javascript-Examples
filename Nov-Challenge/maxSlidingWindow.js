/*
Sliding Window Maximum


You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
   Hide Hint #1  
How about using a data structure such as deque (double-ended queue)?
   Hide Hint #2  
The queue size need not be the same as the window’s size.
   Hide Hint #3  
Remove redundant elements and the queue should store only elements that need to be considered.

*/

var maxSlidingWindow = function(nums, k) {
    if(nums==null || nums.length ==0)
       return null;
     let res = [];
   const deq = [];
     
   for(let i=0;i<nums.length;i++){
    
     while(deq.length-1>=0 && nums[i] > deq[deq.length-1]) {
       deq.pop(); 
     }
     /* Add the new index to the end of the ArrayDeque */
     deq.push(nums[i]); 
     // When i + 1 - k >= 0, the window is fully overlapping nums     
     let j = i+1-k;     
         
     if(j >= 0) {
       res.push(deq[0]);
       if(nums[j] === deq[0])// If the biggest element in q is about to exit window, remove it from q
           deq.shift();
     }
     
   }
   return res;
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums,k));