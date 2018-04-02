/*
345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let order = [];
    let s2 = ""
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s.charAt(i))) {
            order.push(s.charAt(i));
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!vowels.has(s.charAt(i))) {
            s2 += s.charAt(i);
        } else {
            s2 += order.pop();
        }
    }
    
    return s2;
};
