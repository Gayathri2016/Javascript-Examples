var search = function(nums, target) {
    var start =0,end = nums.length-1;
    var mid=Math.floor((start+end)/2);
   while(nums[mid] !== target && start<=end){
        
        if (target > nums[mid] )
        {
            start = mid + 1;
        }
        else if (target < nums[mid] )
        {
            end = mid - 1;
        }
        
       mid=Math.floor((start+end)/2);
   }
   return nums[mid]===target?mid:-1;
};
var nums=[-1,0,3,5,9,12];
console.log(search(nums,9));