var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let i =0;
    let end=nums.length-1;
    let res=0;
    while(i<end){
    let sum = nums[i]+nums[end];
        if( sum=== k){
         res++;
       i++;
       end--;
     }else if(sum>k)
         end--;
      else
          i++;
    }
    return res;
 };
 const maxOperations1 = (nums, k) =>
   nums
     .reduce(
       (acc, curr) =>
         acc.get(k - curr)
           ? acc
               .set(k - curr, (acc.get(k - curr) || 1) - 1)
               .set('opCnt', acc.get('opCnt') + 1)
           : acc.set(curr, (acc.get(curr) || 0) + 1),
       new Map([['opCnt', 0]]),
     )
     .get('opCnt');
 
 let nums = [1,2,3,4], k = 5;
 let nums1=[3,1,3,4,3], k1 = 6
 console.log(maxOperations1(nums1,k1));