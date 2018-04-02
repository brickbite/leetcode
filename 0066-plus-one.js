/*
66. Plus One

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;
    let current = digits[index];
    current++;
    digits[index] = current;

    while (current > 9 && index > -1) {
        digits[index] = 0;
        index--;
        if (index > -1) {
            current = digits[index] + 1;
        }
    }
    
    if (current > 9) {
        let newD = [1];
        digits[index] = 0;
        for (let i = 0; i < digits.length; i++) {
            newD.push(digits[i]);
        }
        return newD;
    } else {
        digits[index] = current;
    }
    
    return digits;
};
