/*
73. Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

var setZeroes = function(matrix) {
    
    var zero_rows = [];
    var zero_cols = [];
    for(let rows = 0; rows < matrix.length; rows++){
        for(let cols = 0; cols < matrix[rows].length; cols++){
            if(matrix[rows][cols] === 0){
                zero_rows.push(rows);
                zero_cols.push(cols);
            }
        }
    }
    
    for(var zeroRows = 0; zeroRows < zero_rows.length; zeroRows++){
        let index = zero_rows[zeroRows];
        for(let row = 0; row < matrix[index].length; row++){
            matrix[index][row] = 0;
        }
    }
    
    for(var zeroCols = 0; zeroCols < zero_cols.length; zeroCols++){
      let index = zero_cols[zeroCols];
      for(let col = 0; col < matrix.length; col++){
        matrix[col][index] = 0;
      }
    }
};
