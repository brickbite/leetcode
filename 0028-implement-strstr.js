/*
28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    
    if (needle.length > haystack.length) {
        return -1;
    }
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            let found = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack.charAt(i + j) !== needle.charAt(j)) {
                    found = -1;
                    break;
                }
            }
            
            if (found > -1) {
                return found;
            }
        }
    }
    
    return -1;
};
