var maxProfit = function(k, prices) {
    if(prices.length <=1) return 0;

    if(k > (prices.length / 2) ){
        let profit = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]){
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
    else{
        let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for(let t = 1; t <= k; t++){
            let min = prices[0];
            let max = 0;
            for(let i = 0; i < size; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max
            }
        }
        return dp.pop();   
    }
};

console.log(maxProfit(5,[3,2,6,5,0,3]));