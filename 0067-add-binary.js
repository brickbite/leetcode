/*
67. Add Binary

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    // make a the longer one, b the shorter one
    if (b.length > a.length) {
        let temp = a;
        a = b;
        b = temp;
    }
    
    let n = Math.min(a.length, b.length);
    let diff = a.length - b.length;
    
    let result = '';
    
    let binary = {
        '00': () => {
            carry = false;
            return '0';
        },
        '01': () => {
            carry = false;
            return '1';
        },
        '10': () => {
            carry = false;
            return '1';
        },
        '11': () => {
            carry = true;
            return '0';
        },
        '001': () => {
            carry = false;
            return '1';
        },
        '101': () => {
            carry = true;
            return '0';
        },
        '011': () => {
            carry = true;
            return '0';
        },
        '111': () => {
            carry = true;
            return '1';
        },
    };
    
    let carry = false;
    for (let i = n - 1; i > -1; i--) {
        let nums = a.charAt(i + diff) + b.charAt(i);
        
        if (carry) {
            result = binary[nums + '1']() + result;
        } else {
            result = binary[nums]() + result;
        }
        
    }
    
    if (carry) {
        for (let i = diff - 1; i > -1; i--) {
            carry ? result = binary[a.charAt(i) + '1']() + result : result = a.charAt(i) + result;
        }
        if (carry) {
            result = '1' + result;
        }
    } else {
        result = a.substring(0, diff) + result;
    }
    
    return result;
};
