/*
  Basic Calculator II
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.

*/

var calculate = function(s) {
    if(!s || !s.length) return 0;
 s= s.trim();
 let res =0,num=0,stack=[],sign = '+';

   for(let i=0;i<s.length;i++){
       
     if(s[i] === ' '){
         continue;
     }
       if(!isNaN(s[i])){
         num = num*10 + s[i].charCodeAt(0)-'0'.charCodeAt(0);
     }
     if(isNaN(s[i]) || i=== s.length-1){
         switch(sign){
           case '+':
             stack.push(num);
           break;
         case '-':
             stack.push(-num);
           break;
         case '*':
             stack.push(stack.pop()*num);
           break;
         case '/':
             stack.push(parseInt(stack.pop() / num, 10));
           break;
       }
       sign = s[i];
       num =0;
     }
     
     
   }
  
   return stack.reduce((a,b)=>a+b);
};
let str="3+2*2",str1=" 3/2 ",str2=" 3+5 / 2 ";
console.log(calculate(str2));