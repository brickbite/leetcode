/*
657. Judge Route Circle

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const position = {x: 0, y: 0};
    for (let i = 0; i < moves.length; i++) {
        moves[i] === 'U' ? position.y++ : null;
        moves[i] === 'D' ? position.y-- : null;
        moves[i] === 'L' ? position.x-- : null;
        moves[i] === 'R' ? position.x++ : null;
    }
    return position.x === 0 && position.y === 0 ? true : false
};
