/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    
    let longest = '';
    
    let minLen = Infinity;
    
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length;
        }
    }
    
    for (let i = 0; i < minLen; i++) {
        let ok = true;
        let char = strs[0].charAt(i);
        for (let j = 0; j < strs.length; j++) {
            if (char !== strs[j].charAt(i)) {
                ok = false;
            }
        }
        if (ok) {
            longest += strs[0].charAt(i);
        } else {
            break;
        }
    }
    
    return longest;
};
