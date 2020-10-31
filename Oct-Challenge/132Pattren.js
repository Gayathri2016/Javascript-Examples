/* 
Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

 

Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/

var find132pattern = function(nums) {
   let min = -Infinity;
   let stack = [];
   for(let i=nums.length-1;i>=0;i--){
       //Compare that 2nd highest min to the num before it, and if that is less than 2nd highest min return true
      if(nums[i]<min)
        return true;
      else{
           //Use stack to find 2nd highest min(compare previous number to number in stack - if the previous num is higher then pop() the last value of stack)
          while(stack.length>0 && nums[i]>stack[stack.length-1]){
              min=stack.pop();
          }
          stack.push(nums[i]);
      }
   } 
   return false;
};