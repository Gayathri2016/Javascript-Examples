var majorityElement = function(nums) {
	let res=[];
    var map = nums.reduce((a,c)=>{
    a[c]=(a[c]||0)+1;
    return a;
    },{});
    for(let i in map){
      if(map[i]>nums.length/3){
      res.push(i);
      }
    }
    
    return res;
};

console.log(majorityElement([3,2,3]));