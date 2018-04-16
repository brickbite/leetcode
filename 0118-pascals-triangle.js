/*
118. Pascal's Triangle

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const a = [];
    
    const p = {
        1: [1],
        2: [1, 1]
    };
    
    for (let i = 3; i <= numRows; i++) {
        let temp = [1];    
        for (let j = 1; j < p[i - 1].length; j++) {
            temp.push(p[i-1][j - 1] + p[i-1][j]);
        }
        temp.push(1);
        p[i] = temp;
    }
    
    for (let i = 1; i <= numRows; i++) {
        a.push(p[i]);
    }
    
    return a;
};
