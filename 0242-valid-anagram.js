/*
242. Valid Anagram

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sHist = {};
    
    for (let i = 0; i < s.length; i++) {
        if (sHist[s.charAt(i)]) {
            sHist[s.charAt(i)]++;
        } else {
            sHist[s.charAt(i)] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        sHist[t.charAt(i)]--;
    }
    
    const letters = Object.keys(sHist);
    
    for (let i = 0; i < letters.length; i++) {
        if (sHist[letters[i]] !== 0) {
            return false;
        }
    }
    
    return true;
};
