/*
Score of Parentheses

Solution
Given a balanced parentheses string S, compute the score of the string based on the following rule:

    () has score 1
AB has score A + B, where A and B are balanced parentheses strings.
    (A) has score 2 * A, where A is a balanced parentheses string.


Example 1:

    Input: "()"
Output: 1
Example 2:

    Input: "(())"
Output: 2
Example 3:

    Input: "()()"
Output: 2
Example 4:

    Input: "(()(()))"
Output: 6


Note:

    S is a balanced parentheses string, containing only(and).
2 <= S.length <= 50

*/

var scoreOfParentheses = function (s) {
    let len = s.length,
        ans = 0,
        pwr = 0;
    for (let i = 1; i < len; i++)
        if (s.charAt(i) === '(') pwr++
    else if (s.charAt(i - 1) === '(') ans += 1 << pwr--
    else pwr--
    return ans;


};

console.log(scoreOfParentheses('(()(()))'));