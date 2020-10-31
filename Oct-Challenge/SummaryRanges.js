/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length ==0 || nums.length==1) return nums.map(String);
        let res =[],start=nums[0],end=0;
        
        for(let i=1;i<nums.length;i++){
        let curr = nums[i];
            if(curr-1 == nums[i-1]){
            end=nums[i];
          }else if(nums[i-1] != curr-1){
              if(end == 0)
                res.push(start.toString());
            else
                res.push(start+"->"+end);
            start=nums[i];
            end =0;
          }
          
              
        }
        if(end>0)
            res.push(start+"->"+end);
        else
          res.push(start.toString());
        return res;
    };
    
    function summaryRanges1(nums) {
      var res = [];
      for (var i = 0, left = nums[0]; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
          res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
          left = nums[i + 1];
        }
      }
      return res;
    }
    let nums=[1,2];//[0];//[0,1,2,4,5,7];//[0,1,2,3,4,6,8,9]
    console.log(summaryRanges(nums));