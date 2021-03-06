/*
Reach a Number
Medium

636

495

Add to List

Share
You are standing at position 0 on an infinite number line. There is a goal at position target.

On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.

Return the minimum number of steps required to reach the destination.

Example 1:
Input: target = 3
Output: 2
Explanation:
On the first move we step from 0 to 1.
On the second step we step from 1 to 3.
Example 2:
Input: target = 2
Output: 3
Explanation:
On the first move we step from 0 to 1.
On the second move we step  from 1 to -1.
On the third move we step from -1 to 2.
Note:
target will be a non-zero integer in the range [-10^9, 10^9].

*/

var reachNumber = function(target) {
    if(target <0 ) target= -target;
    let s =1;
    let cur = 0;
    while(cur <target || cur%2 !== target%2 ){
        cur+=s;
      s++;
    }
    return s-1;
  };

  console.log(reachNumber(2));