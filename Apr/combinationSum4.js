/*
Combination Sum IV
Given an array of distinct integers nums and a target integer target,
    return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32 - bit integer.



Example 1:

    Input: nums = [1, 2, 3], target = 4
Output: 7
Explanation:
    The possible combination ways are:
    (1, 1, 1, 1)
    (1, 1, 2)
    (1, 2, 1)
    (1, 3)
    (2, 1, 1)
    (2, 2)
    (3, 1)
Note that different sequences are counted as different combinations.
Example 2:

    Input: nums = [9], target = 3
Output: 0


Constraints:

    1 <= nums.length <= 200
1 <= nums[i] <= 1000
All the elements of nums are unique.
1 <= target <= 1000


Follow up: What
if negative numbers are allowed in the given array ? How does it change the problem ? What limitation we need to add to the question to allow negative numbers ?

Top - Down DP Approach: Our DP array(dp) will contain cells(dp[i]) where i will represent the remaining space left before T and dp[i] will represent the number of ways the solution(dp[T]) can be reached from i.

At each value of i as we build out dp we 'll iterate through the different nums in our number array (N) and consider the cell that can be reached with each num (dp[i-num]). The value of dp[i] will therefore be the sum of the results of each of those possible moves.

We 'll need to seed dp[0] with a value of 1 to represent the value of the completed combination, then once the iteration is complete, we can return dp[T] as our final answer.

Bottom - Up DP Approach: Our DP array(dp) will contain cells(dp[i]) where i will represent the current count as we head towards T and dp[i] will represent the number of ways we can reach i from the starting point(dp[0]).This means that dp[T] will represent our final solution.

At each value of i as we build out dp we 'll iterate through the different nums in our number array (N) and update the value of the cell that can be reached with each num (dp[i+num]) by adding the result of the current cell (dp[i]). If the current cell has no value, then we can continue without needing to iterate through N.

We 'll need to seed dp[0] with a value of 1 to represent the value of the common starting point, then once the iteration is complete, we can return dp[T] as our final answer.

In both the top - down and bottom - up DP solutions, the time complexity is O(N * T) and the space complexity is O(T).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    if(target === 0 ) return 1;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]<=target){
            
            count += combinationSum4(nums, target - nums[i]);
                
        }
        
    }
    return count;
};

console.log(combinationSum4([1,2,3], 4));
//w / Top - Down DP:
    var tcombinationSum4 = function (N, T) {
        let dp = new Uint32Array(T + 1)
        dp[0] = 1
        for (let i = 1; i <= T; i++)
            for (let num of N)
                if (num <= i) dp[i] += dp[i - num]
        return dp[T]
    };
///w / Bottom - Up DP:
    var bcombinationSum4 = function (N, T) {
        let dp = new Uint32Array(T + 1)
        dp[0] = 1
        for (let i = 0; i < T; i++) {
            if (!dp[i]) continue
            for (let num of N)
                if (num + i <= T) dp[i + num] += dp[i]
        }
        return dp[T]
    };