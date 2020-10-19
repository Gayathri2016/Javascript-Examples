var rob = function(nums) {
    if(nums.length === 0){
        return 0;
    }else if(nums.length === 1){
        return nums[0];
    }
    return Math.max(robbing(1, nums.length - 1), robbing(2, nums.length));

    function robbing(start, end){
        var dp = [];
        dp[start - 1] = 0;
        dp[start] = nums[start - 1];
        for(var i = start + 1; i <= end; i++){
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }
        return dp[end];
    }
};
let nums = [2,3,2];//[1,2,3,1];
console.log(rob(nums));