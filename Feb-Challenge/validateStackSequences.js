/*

Given two sequences pushed and popped with distinct values,
return true
if and only
if this could have been the result of a sequence of push and pop operations on an initially empty stack.



Example 1:

    Input: pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]
Output: true
Explanation: We might do the following sequence:
        push(1), push(2), push(3), push(4), pop() - > 4,
        push(5), pop() - > 5, pop() - > 3, pop() - > 2, pop() - > 1
    Example 2:

    Input: pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2]
Output: false
Explanation: 1 cannot be popped before 2.


Idea:
    So we can fairly easily solve this problem by just reconstructing the stack.If we iterate through pushed and push the values to a stack, then whenever the stack 's top matches the current index (j) of popped, we know (because the numbers of the array are distinct) that we can pop the value off our stack and increment the popped index to match.

That would solve the problem in O(N) time and O(N) space, but we can make it even more efficient by doing an in -place stack using a 2 - pointer system with pushed.That drops our answer to O(N) time and O(1) space.

Instead of pushing the values to a separate stack array, we can just use the second pointer(s) in pushed to be the stack index and use pushed from[0, s] to represent our stack.This way, instead of pushing to an external stack array, we just overwrite the value of pushed representing the new top index of our stack(pushed[s]) with the current pushed value(pushed[i]).

When we 're done with pushed values, if our "stack" has been depleted to empty (s == 0), then we can return true, otherwise false.

Implementation:
    For all but Java, ~s, using the bitwise NOT operator(~), can
function as a more efficient way of writing s != -1.

All but Javascript will need to check
for boundary conditions on writing the new stack top.

*/

var validateStackSequences = function (pushed, popped) {
    let len = pushed.length,
        i = 0,
        j = 0,
        s = 0
    while (i < len)
        if (~s && popped[j] === pushed[s]) j++, s--
    else pushed[++s] = pushed[++i]
    return !s
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));