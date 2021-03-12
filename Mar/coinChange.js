/*
Coin Change

Solution
You are given coins of different denominations and a total amount of money amount.Write a
function to compute the fewest number of coins that you need to make up that amount.If that amount of money cannot be made up by any combination of the coins,
    return -1.

You may assume that you have an infinite number of each kind of coin.



Example 1:

    Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

    Input: coins = [2], amount = 3
Output: -1
Example 3:

    Input: coins = [1], amount = 0
Output: 0
Example 4:

    Input: coins = [1], amount = 1
Output: 1
Example 5:

    Input: coins = [1], amount = 2
Output: 2


Constraints:

    1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

*/

var coinChange = function (coins, amount) {
    // since arrays are zero indexed, we need amount + 1
    // ex. amount is 4, if we will an array to length of 4, it will only go up to index 3
    // we use the index value to represent the value of coin so they need to be the same
    // fill amount set to amount + 1 so we have a number to use when comparing with minimum
    let dp = new Array(amount + 1).fill(amount + 1);
    // always needed to start since zero value will be made with zero coins
    dp[0] = 0;
    // next loop through coins to establish our dp array
    for (let i = 0; i < coins.length; i++) {
        // j is started at coins[i] because numbers smaller than the first coin are impossible to make
        // ex. coin[0] = 5, impossible to make a value of 1-4
        for (let j = coins[i]; j <= amount; j++) {
            // the curremt value is compare with the itself and the value minus the current coin
            // dp[j - coins[i]] represents checking the previous coins count value, + 1 to account for this coin being counted 
            // THIS is the most important part that I could not even possibly think about 
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    // dp[amount] === amount + 1, if the amount is the same as the fill amount, then we cant get this value with coins provided
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
