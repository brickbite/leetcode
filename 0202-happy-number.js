/*
202. Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Credits:
Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var array = [];
    var results = [];
    var tempSum = n;
    
    while (tempSum !== 1){
        array = tempSum.toString().split("");
        array = array.map(function(element) { return element*element });
        tempSum = array.reduce(function(a,b) { return a + b});
        if (results.indexOf(tempSum) !== -1) {
            return false
        }
        results.push(tempSum);        
    }
    
    
    return true
};
