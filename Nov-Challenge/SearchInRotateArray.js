/*

Search in Rotated Sorted Array II

Solution
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?
*/
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
            
            while (l <= r) {
                let mid = Math.floor(l + (r - l) / 2);
                let cur = nums[mid];
                
                if (cur == target) {
                    return true;
                } else if (target > cur) {
                    if (target <= nums[r]) {
                        l = mid + 1;
                    } else {
                        r -= 1;
                    }
                } else {
                    if (target >= nums[l]) {
                        r = mid - 1;
                    } else {
                        l += 1;
                    }
                }
            }
            return false;
     }
     
     console.log(search([1,1],1));