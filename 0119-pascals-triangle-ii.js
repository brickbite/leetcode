/*
119. Pascal's Triangle II

Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let a = [1];
    
    for (let i = 1; i <= rowIndex; i++) {
        a[i] = a[i - 1] * (rowIndex  + 1 - i) / i;
    }
    
    return a;
};
