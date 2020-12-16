var sortedSquares = function(nums) {
    return nums.reduce((a,b)=>[...a, b*b], []).sort((a,b)=>a-b);
    
};

let nums = [-4,-1,0,3,10];

console.log(sortedSquares(nums));