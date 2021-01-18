var findKthLargest = function(nums, k) {
		
    return nums.sort((a, b) => a - b)[nums.length - k]
    
};

let nums =[3,2,3,1,2,4,5,5,6], k = 4;
let nums1=[3,2,1,5,6,4],k1=2;
console.log(findKthLargest(nums1, k1));