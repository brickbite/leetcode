/*
58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let start = null;
    let end = null;
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== ' ' && start === null) {
            start = i;
            end = i;
        } else if (s.charAt(i) !== ' ' && start !== null) {
            end = i;
        }
    }
    
    let words = s.slice(start, end + 1);
    words = words.split(' ');
    return words[words.length - 1].length;
};
