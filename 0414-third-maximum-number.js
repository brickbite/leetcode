/*
414. Third Maximum Number

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    const max = {
        1: -Infinity,
        2: -Infinity,
        3: -Infinity
    };
    
    function updateMax(obj, num) {
        for (let i = 1; i <= 3; i++) {
            
            if (num === obj[i]) {
                break;
            }
            
            if (num > obj[i]) {
                
                for (let j = 3; j > i; j--) {
                    obj[j] = obj[j - 1];
                }
                
                obj[i] = num;
                break;
            }
            
        }
        
        return obj;
    }
    
    for (let i = 0; i < nums.length; i++) {
        updateMax(max, nums[i]);
    }
    
    if (max[3] > -Infinity) {
        return max[3];
    } else {
        return max[1];
    }
    
};
