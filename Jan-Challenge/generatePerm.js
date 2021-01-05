/*
Beautiful Arrangement
Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

perm[i] is divisible by i.
i is divisible by perm[i].
Given an integer n, return the number of the beautiful arrangements that you can construct.

 

Example 1:

Input: n = 2
Output: 2
Explanation: 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 15
*/


var count=0;    
var countArrangement = function(n) {
    let arr = Array.from(n+1);
    generatePerm(n, 1,arr);
    return count;
  
};
var generatePerm = function(n, pos, arr){
	if(pos>n){
  	count++;
  }
  for(let i=1;i<=n;i++){
  	if(!arr[i] && (pos%i==0 || i%pos == 0)){
    	arr[i] = true;
      generatePerm(n, pos+1, arr);
      arr[i] = false;
    }
  }
}
var countArrangement1 = function(n) {
    let count = 0;
     const visited = Array(n+1).fill(false)
     
     function permute(idx) {
         if(idx > n) count++;
         
         for(let i = 1; i <= n; i++) {
             if(visited[i]) continue;
             if(i % idx && idx % i) continue;
             visited[i] = true;
             permute(idx+1);
             visited[i] = false;
         }
     }
     permute(1);
     return count;
   
 };
/*function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
}*/

console.log(countArrangement1(5));
//document.write(JSON.stringify(permute([5, 3, 7, 1])));