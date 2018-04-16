/*
231. Power of Two

Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {    
    if (n < 0) {
        return false;
    }
    
    let power = 1;
    
    while (Math.abs(power) < Math.abs(n)) {
        power = power * 2;
    }
    
    if (Math.abs(power) === Math.abs(n)) {
        return true;
    } else {
        return false;
    }
};
