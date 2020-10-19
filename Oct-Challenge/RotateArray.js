var rotate = function(nums, k) {
    let n = nums.length;
    while(k>0){
         let temp = nums.pop();
       nums.unshift(temp);
       k--;
     }
     return nums;
 };

 var rotate1 = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
};
 console.log(rotate1([1,2],3));