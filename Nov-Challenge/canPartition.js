/*
Partition Equal Subset Sum
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/


var canPartition = function(nums) {
    //total of nums array
    let total = nums.reduce((a,b) => a+b, 0)
    
    //check if total is even or odd,if odd return false
    if(total % 2 != 0) {
        return false;
    }
    
    //we can take half of total since value will always be even number,never decimal
    let half = total / 2;
    
   //Now we have to check if one of the subarray has half value because other subarray      will automatically have the other half value
    
    let map = [];
    
    //let's take a base case true and we will update it accordingly as we traverse          through nums array
    map[0] = true;
    
    for(let index = 0; index < nums.length; index++) {
        let num = nums[index];
        for(let i = half; i>=num ; i--) {
            map[i] = map[i] || map[i - num];
        }
    }
    return map[half] || false;
};

console.log(canPartition([1,5,11,5]));