/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    
    const n = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let tempChar = s[0];
    let temp = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === tempChar) {
            temp += n[s[i]];
        } else {
            if (n[tempChar] < n[s[i]]) {
                total -= temp;
            } else {
                total += temp;
            }
            temp = n[s[i]];
            tempChar = s[i];
        }
    }
    
    total += temp;
    
    return total;
};
