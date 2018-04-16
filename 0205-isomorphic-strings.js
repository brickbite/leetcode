/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {};
    const map2 = {};
    
    for (let i = 0; i < s.length; i++) {
        if (map[s.charAt(i)] !== undefined && map[s.charAt(i)] !== t.charAt(i)) {
            return false;
        } else if (map2[t.charAt(i)] !== undefined && map2[t.charAt(i)] !== s.charAt(i)) {
            return false;
        } else {
            map[s.charAt(i)] = t.charAt(i);
            map2[t.charAt(i)] = s.charAt(i);
        }
    }
    
    return true;
};
