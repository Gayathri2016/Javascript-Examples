/*
Next Greater Element III

Solution
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
 

Constraints:

1 <= n <= 231 - 1


*/
var nextGreaterElement = function(n) {
    let s = '' + n;
     let j = s.length - 1, i = j - 1;
     while (s[i + 1] <= s[i]) i--;
     if (i === -1) return -1;
     while (s[j] <= s[i]) j--;
     let right = s.substring(i + 1, j) + s[i] + s.substr(j + 1);
     let res = parseInt(s.substr(0, i) + s[j] + right.split('').reverse().join(''));
     return res < 2147483648 ? res : -1;
 };
 const nextGreaterElement1 = n => {
     let arr = Array.from(`${n}`, Number)
     let max = -Infinity, idx = -1
     for(let i = arr.length-1; i >= 0; i--){
         if(arr[i] < max){
             idx = i
             break
         }
         max = Math.max(max, arr[i])
     }
     if(idx === -1)return -1
     let secondHalf = arr.splice(idx+1).sort((a,b) => a - b)
     for(let i = 0; i < secondHalf.length; i++)
         if(secondHalf[i] > arr[idx]){
             [arr[idx], secondHalf[i]] = [secondHalf[i], arr[idx]]
             break
         }
     let result = +arr.concat(secondHalf).join``
     
     return result > 2147483647 ? -1 : result
 }
 let num = 1234;
 console.log(nextGreaterElement1(num));