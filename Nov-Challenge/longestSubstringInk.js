/*
Longest Substring with At Least K Repeating Characters

Solution
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

 

Example 1:

Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 105
JavaScript	
1
/**
2
 * @param {string} s
3
 * @param {number} k
4
 * @return {number}
5
 */
var longestSubstring = function(s, k) {
    let map=new Map();
        map.clear();
        for(let item of s){
            if(map.has(item))
                map.set(item,map.get(item)+1);
            else
                map.set(item,1);
        }
        for(let [item,val] of map){
            if(val<k){
                let ar=s.split(item);
                
                let res=0;
                for(let word of ar){
                    res=Math.max(res,longestSubstring(word,k));
                    
                }
                return res;
            }
        }
        return s.length;
    };
    
    var longestSubstring1 = function(s, k) {
        for (var char of Array.from(new Set(s))) {
            if (s.match(new RegExp(char, 'g')).length < k) {
                return Math.max(...s.split(char).map(str=> longestSubstring1(str, k)));
            }
        }
        return s.length;
    };
    
    console.log(longestSubstring("ababbc",2));