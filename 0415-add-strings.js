/*
415. Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1.length < num2.length) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    const n = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    };
    
    let final = '';
    let carry = 0;    
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i > -1) {
        let sum = null;
        
        if (num2.charAt(j) === '') {
            sum = n[num1.charAt(i)] + carry;
        } else {
            sum = n[num1.charAt(i)] + n[num2.charAt(j)] + carry;
        }
        
        carry = 0;
        
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        }
        
        final = sum.toString() + final;
        i--;
        j--;
    }
    
    if (carry === 1) {
        final = '1' + final;
    }
    
    return final;
};
