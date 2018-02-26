/*
7. Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < -2147483648 || x > 2147483647) {
        return 0;
    }
    
    let rvsd = 0;
    let digit = null;
    let neg = false;
    
    x < 0
        ? (x *= -1, neg = true)
        : null;
    
    while (x) {
        rvsd += x % 10;
        x = Math.floor(x / 10);
        rvsd *= 10;
    }
    
    rvsd /= 10;
    
    neg
        ? rvsd *= -1
        : null;
    
    if (rvsd < -2147483648 || rvsd > 2147483647) {
        return 0;
    }
    
    return rvsd;
};
