/*
Numbers At Most N Given Digit Set
Given an array of digits, you can write numbers using each digits[i] as many times as we want.  For example, if digits = ['1','3','5'], we may write numbers such as '13', '551', and '1351315'.

Return the number of positive integers that can be generated that are less than or equal to a given integer n.

 

Example 1:

Input: digits = ["1","3","5","7"], n = 100
Output: 20
Explanation: 
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
Example 2:

Input: digits = ["1","4","9"], n = 1000000000
Output: 29523
Explanation: 
We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
In total, this is 29523 integers that can be written using the digits array.
Example 3:

Input: digits = ["7"], n = 8
Output: 1
 

Constraints:

1 <= digits.length <= 9
digits[i].length == 1
digits[i] is a digit from '1' to '9'.
All the values in digits are unique.
1 <= n <= 109



Explanation
I treat N as a string and deal with it as its length grows: N[0], N[0,1], N[0,1,2], ... N
In each step, I split the possible results into two parts: smaller and equal
Now I can update smaller and equal step by step.
Remember to consider the situation when the positions before current position are nulls.
Example
			D = [2,5,6,7]		N = 5341
smaller=2    		[0,2]             // 2<5 and include 0
equal=1			[5]				
smaller=10    		[02,05,06,07]     // from the last smaller: [0]
			[22,25,26,,27]    // from the last smaller:  [2]
			[52]              // from the last equal: [5]
			[0]               // iinclude 0
equal=0			[]				
smaller=41    		[022,052,062,072]   		
			[025,055,065,075]   		
			[027,057,067,077]   		
			[027,057,067,077] // from the last smaller: [02, 05, 06, 07]
			
			[222,252,262,272]
			[225,255,265,275]
			[226,256,266,276]
			[227,257,267,277] // from the last smaller: [22, 25, 26, 27]
			
			[522,525,526,527] // from the last smaller: [52]
			
			[02,05,06,07]     // from the last smaller: [0]
			
			[0]               // include 0
equal=0			[]				
smaller=165		......(too many items)
equal=0			[]
So the result is smaller+equal-1 ( -1, because the smaller array includes 0, which is not allowed )

Code
*/
var atMostNGivenDigitSet = function(D, N) {
    let num = ''+N;
    let smaller = D.filter(x=>x<num[0]).length+1; // +1, because I included 0
    let equal = D.filter(x=>x===num[0]).length;
		
    for(let i=1; i<num.length; i++){
        smaller*=D.length;
        smaller+=equal*D.filter(x=>x<num[i]).length;
        smaller++;  // include 0
        equal=equal*(D.some(x=>x===num[i])?1:0);
    }
    return smaller+equal-1; // - [0]
};

let d= ["1","3","5","7"], n = 100;
console.log(atMostNGivenDigitSet(d,n));