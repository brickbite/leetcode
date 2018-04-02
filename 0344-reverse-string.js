/*
344. Reverse String

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let s2 = "";
    
    for (let i = s.length - 1; i > -1; i--) {
        s2 += s.charAt(i);
    }
    
    return s2;
};
