/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while ((end - start) > 0) {
        if (!s.charAt(start).match(/^[a-z0-9]+$/i)) {
            while(!s.charAt(start).match(/^[a-z0-9]+$/i) && start < s.length) {
                start++;
            }
        }
        if (!s.charAt(end).match(/^[a-z0-9]+$/i)) {
            while(!s.charAt(end).match(/^[a-z0-9]+$/i) && end >= 0) {
                end--;
            }
        }
        
        if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
};
