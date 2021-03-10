/*
Shortest Unsorted Continuous Subarray

Solution
Given an integer array nums, you need to find one continuous subarray that
if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.



Example 1:

    Input: nums = [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort[6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

    Input: nums = [1, 2, 3, 4]
Output: 0
Example 3:

    Input: nums = [1]
Output: 0


Constraints:

    1 <= nums.length <= 104 -
    105 <= nums[i] <= 105


Follow up: Can you solve it in O(n) time complexity ? 
*/

var findUnsortedSubarray = function (nums) {
    let n = nums.Length;
    let l = 0,
        r = nums.length - 1,
        nd = -1,
        st = 0;
    let min = Infinity,
        max = -Infinity;

    while (r >= 0) {
        nums[l] >= max ? max = nums[l] : nd = l;
        nums[r] <= min ? min = nums[r] : st = r;
        l++;
        r--;
    }

    return nd - st + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));