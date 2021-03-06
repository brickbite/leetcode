/*
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let maxLength = 0;
    let subStrStart = 0;
    let subStr = '';
    
    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        if (subStr.includes(currChar)) {
            while (subStr.includes(currChar)) {
                subStrStart++;
                subStr = s.slice(subStrStart, i);
            }
        } 
        subStr += currChar;
        subStr.length > maxLength
            ? maxLength = subStr.length
            : null;
    }
    
    return maxLength;
};
