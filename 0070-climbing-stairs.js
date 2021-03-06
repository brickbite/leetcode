/*
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.


Example 1:

Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    // Tabluation (Bottom-Up):
    const climbed = [0, 1, 2];

    if (n < 1) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    for (let i = 3; i < n; i++) {
        climbed[i] = climbed[i - 1] + climbed[i - 2];
    }

    return climbed[n - 1] + climbed[n - 2];
  
//     // Memoization (Top-Down):
//     if (n < 1) {
//         return 0;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     if (n === 2) {
//         return 2;
//     }

//     if (memo[n]) {
//         return memo[n]
//     } else {
//         return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     }

};
