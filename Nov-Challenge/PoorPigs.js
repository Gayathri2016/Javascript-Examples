/*
There are 1000 buckets, one and only one of them is poisonous, while the rest are filled with water. They all look identical. If a pig drinks the poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket is poisonous within one hour?

Answer this question, and write an algorithm for the general case.

 

General case:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the poisonous bucket within p minutes? There is exactly one bucket with poison.

 

Note:

A pig can be allowed to drink simultaneously on as many buckets as one would like, and the feeding takes no time.
After a pig has instantly finished drinking buckets, there has to be a cool down time of m minutes. During this time, only observation is allowed and no feedings at all.
Any given bucket can be sampled an infinite number of times (by an unlimited number of pigs).
   Show Hint #1  
   Show Hint #2  
   Show Hint #3  
JavaScript	
1
/**
2
 * @param {number} buckets
3
 * @param {number} minutesToDie
4
 * @param {number} minutesToTest
5
 * @return {number}
6
 */
7
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  if(buckets<2) return 0;
  if(minutesToDie > minutesToTest) return Number.MAX_VALUE;
  let k=minutesToTest/minutesToDie;
  return Math.ceil(Math.log(buckets)/Math.log(k+1));
};

console.log(poorPigs(1000,15,60));