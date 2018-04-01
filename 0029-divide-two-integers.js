/*
29. Divide Two Integers

Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let d = 0;
    let topNeg = false;
    let bottomNeg = false;
    
    if (dividend < 0) {
        topNeg = true;
        dividend = -1 * dividend;
    }
    
    if (divisor < 0) {
        bottomNeg = true;
        divisor = -1 * divisor;
    }
    
    // time limit exceeded
    while (dividend >= divisor) {
        dividend -= divisor;
        d++;
    }
    
    if (topNeg) {
        d *= -1
    }
    
    if (bottomNeg) {
        d *= -1
    }
    
    return d;
};
