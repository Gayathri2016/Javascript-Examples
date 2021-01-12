/*
 Merge Sorted Array

Solution
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

0 <= n, m <= 200
1 <= n + m <= 200
nums1.length == m + n
nums2.length == n
-109 <= nums1[i], nums2[i] <= 109
   Hide Hint #1  
You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution?
   Hide Hint #2  
If you simply consider one element each at a time from the two arrays and make a decision and proceed accordingly, you will arrive at the optimal solution.
*/


var merge = function(nums1, m, nums2, n) {
	let i1 = m-1;
  let i2 = n-1;
  let t = m+n-1;
  while (i2 > -1) {
    if (i1 < 0)
      while (i2 >= 0)
        nums1[t--] = nums2[i2--];
    else if (nums1[i1] >= nums2[i2])
      nums1[t--] = nums1[i1--];
    else
      nums1[t--] = nums2[i2--];
  }
   return nums1;
};
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge(nums1, m, nums2,n));