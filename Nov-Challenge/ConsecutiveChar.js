/*
  Consecutive Characters

Solution
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.
Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Example 3:

Input: s = "triplepillooooow"
Output: 5
Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11
Example 5:

Input: s = "tourist"
Output: 1

*/

var maxPower = function(s) {
    let res=0;
     let count =0
     let temp;
     s.split('').forEach((e)=>{
        if( e === temp){
                count+=1;
           res=Math.max(res,count);
          //res.push(count+=1);
        }else{
          count=1;
          res=Math.max(res,count);
          temp=e;
        }
       
     });
    return res;//res.length>0 ? Math.max(...res):1;
 };
 let s = "tourist";
 console.log(maxPower(s));