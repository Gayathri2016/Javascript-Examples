/*

  The Skyline Problem
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

Buildings Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]

https://leetcode.com/problems/the-skyline-problem/discuss/395923/JavaScript-Easy-and-Straightforward-with-picture-illustrations


Basic Idea

Treat all left, right positions as the candidate x-poisitons;
For each candidate x-position, find out it's y-position by search for the highest height on top of that position;
Determine if it's necessary to record the position by comparing the height with the previous height.
Illustration

image

Step 1: x-positions

This step is very easy, use set to store all left and right;
image

Step 2: y-positions

For each x-position, find out the highest height on top of it (left-exclusive, right-inclusive];
image

Step 3: exclude redundant points

image

Code
*/
var getSkyline = function(buildings) {
    // store all candidate x-positions
    let cp = new Set();
    for(let [l,r,h] of buildings){
        cp.add(l);
        cp.add(r);
    }
    //console.log(cp);
    let cp1 = [...cp];
    //console.log(cp1);
    cp1.sort((a,b)=>a-b);
    //console.log(cp1); 
    // find the height for every candidate x-position
    let n = buildings.length;
    let res = [[-1,0]];
    for(let p of cp1){
        let i = 0;
        let height = 0;
        while(i<n && buildings[i][0]<=p){
            if(buildings[i][1]>p){
                height = Math.max(height, buildings[i][2]);
            }
            i++;
        }
        if(res[res.length-1][1] === height) continue;
        res.push([p, height]);
    }
    
    return res.slice(1);
};
/*Thinking Process

At the first glance of this problem, I thought we should list out many overlap situations and then deal with them one by one -- which will be very exhausting !!!
And then I tried to find out a united way to all these different overlap situations, something like a moving-vertical-line, to scan all the buildings from left to right, and record every key turning points, but I failed to come up with a neat solution until I saw @oscartsai 's solution.
In @oscartsai 's solution, he used heap, which is not suitable to do in JS. So after I analysed his code and get the basic idea, I came up with my code (the code above can be improved, but I didn't do it).
It's so comfortable to deal with a complicated problem in the simplest way, especially when so many different situations are involved.
So I share this process, hope you can enjoy solving this problem, too :)*/


let buildings = [ [2, 9 ,10], [3, 7 ,15], [5, 12 ,12], [15 ,20 ,10], [19, 24, 8] ];

console.log(getSkyline(buildings));