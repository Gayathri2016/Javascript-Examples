/*
Best Time to Buy and Sell Stock with Transaction Fee

Solution
You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve.You may complete as many transactions as you like, but you need to pay the transaction fee
for each transaction.

Note: You may not engage in multiple transactions simultaneously(i.e., you must sell the stock before you buy again).



Example 1:

    Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
    -Buying at prices[0] = 1 -
    Selling at prices[3] = 8 -
    Buying at prices[4] = 4 -
    Selling at prices[5] = 9
The total profit is((8 - 1) - 2) + ((9 - 4) - 2) = 8.
Example 2:

    Input: prices = [1, 3, 7, 5, 10, 3], fee = 3
Output: 6


Constraints:

    1 < prices.length <= 5 * 104
0 < prices[i], fee < 5 * 104
Hide Hint #1  
Consider the first K stock prices. At the end, the only legal states are that you don't own a share of stock, or that you do. Calculate the most profit you could have under each of these two cases.

Idea:
    This proplem is an introduction to state machine logic.In order to solve it, we can consider the two possible distinct states of being: having no stock and being ready to buy(buying) and owning stock and being ready to sell(selling).

We just need to iterate through the prices(P) and keep track of the best possible value
for these two states of being
for each day.The difficulty is that the tracks of the two states cross over regulary.

For example,
if we consider the state of being ready to buy stock after this iteration(buying), it can be reached from being ready to buy today and doing nothing, OR it can be reached by being ready to sell today and selling(with the additional fee[F]).We just need to pick whichever one yields the best value.

The same is true of the selling state.The new selling state is the better result between the previous selling state with no action and the previous buying state with a stock purchase today.

State Machine Visual

We should manually set our initial values
for buying and selling to account
for the first day and iterate from there.

Since the fee is only administered once per buy / sell pair, we can technically account
for it on either side, as we 're always going to want to return the buying state, having no outstanding stock left to sell.

Question: Should we be worried about updating buying before using it in the second equation ?
    Mathematically, it 's only ever a good day to buy or sell; it cannot be both.

Consider the possible situations: In the first equation,
    if the old buying is greater than selling + P[i] - F, then the new buying will be the same as the old buying, so there will be no change
for the second equation.

But what
if buying changes ? Let 's take an example:

if :buying = 10, P[i] = 4, F = 0
then: newBuying = max(10, selling + 4 - 0)
newSelling = max(selling, newBuying - 4)

if :selling <= 6 // For values of selling less than 7
then: newBuying = max(10, <= 10) // the old buying will still be largest
newBuying = buying // so there's no problem

if :selling > 6 // If selling is greater than 6
then: newBuying = max(10, > 6 + 4) // then buying will change
newBuying = selling + 4 // so we might have a problem

if :newBuying = selling + 4 // But here we see that selling cannot
then: newSelling = max(selling, selling + 4 - 4) // possibly change when buying does
Any positive value
for F would only lower the value of newBuying, which would only make it so that newBuying - P[i] couldn 't even tie selling but would always be lower.
*/

var maxProfit = function (prices, fee) {
    let len = prices.length;
    let b = 0,
        s = -prices[0];
    for (let i = 1; i < len; i++) {
        b = Math.max(b, s + prices[i] - fee);
        s = Math.max(s, b - prices[i]);
    }
    return b;
};
let prices = [1, 3, 7, 5, 10, 3],
    fee = 3;
console.log(maxProfit(prices, fee));