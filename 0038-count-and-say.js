/*
38. Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"

Example 2:

Input: 4
Output: "1211"
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    // iterate up to n (string will be modified each time)
        // define tempString = "";
        // define currentChar = string.charAt(0);
        // define currentCount = 0;
    
        // iterate through string
            // if string.charAt() === currentChar:
                // currentCount++;
            // if character is different from current:
                // add to tempString += currentCount;
                // tempString += currentChar;
                // currentChar = string.charAt();
                // currentCount = 1;
    
    let string = "1";
    
    for (let i = 1; i < n; i++) {
        let tempString = "";
        let currentChar = string.charAt(0);
        let currentCount = 0;
        
        for (let j = 0; j <= string.length; j++) {
            if (string.charAt(j) === currentChar) {
                currentCount++;
            } else if (j === string.length || string.charAt(j) !== currentChar) {
                tempString += currentCount.toString();
                tempString += currentChar;
                currentChar = string.charAt(j);
                currentCount = 1;
            }
        }
        
        string = tempString;
    }
    
    
    return string;
};
