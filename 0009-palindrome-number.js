/*
9. Palindrome Number

Determine whether an integer is a palindrome. Do this without extra space.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let digits = 1;
    while (Math.floor(x / digits) >= 10) {
        digits *= 10;
    }
    
    while (x) {
        if (x % 10 !== (x - (x % (digits)))/(digits)) {
            return false
        }
        x = Math.floor(x / 10);
        digits /= 10;
        x = x % digits;
        digits /= 10;
    }
    
    return true;
};
