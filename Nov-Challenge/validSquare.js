/*
  Valid Square
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
 

Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.
*/

var validSquare = function(p1, p2, p3, p4) {
    let set = new Set()
    set.add(distance(p1,p2));
    set.add(distance(p1,p3));
    set.add(distance(p1,p4));
    set.add(distance(p2,p3));
    set.add(distance(p2,p4));
    set.add(distance(p3,p4));
    console.log(set);
   return set.size ==2 && !set.has(0);
};
var distance = function(p,q){
    return (q[0]-p[0])*(q[0]-p[0]) + (q[1]-p[1])*(q[1]-p[1]);
};
let  p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1];

console.log(validSquare(p1,p2,p3,p4));