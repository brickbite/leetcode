/*
409. Longest Palindrome
DescriptionHintsSubmissionsDiscussSolution
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash = {};
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s.charAt(i)]) {
            hash[s.charAt(i)]++;
        } else {
            hash[s.charAt(i)] = 1;
        }
    }
    
    const letters = Object.keys(hash);
    let totalEven = 0;
    let maxOdd = 0;
    
    for (let i = 0; i < letters.length; i++) {
        if (hash[letters[i]] % 2 === 0) {
            totalEven += hash[letters[i]];
        } else if (hash[letters[i]] > 1) {
            totalEven += hash[letters[i]] - 1;
            maxOdd = 1;
        } else if (hash[letters[i]] === 1) {
            maxOdd = 1;
        }
    }
    
    return totalEven + maxOdd;
};
