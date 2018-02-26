/*
47. Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    const result = []
    
    function recursion(arr, remaining) {
        if (arr.length === nums.length) {
            result.push(arr)
            return
        }
        let iterations = remaining.length
        const duplicates = {}
        for (let i = 0; i < iterations; i++) {
            duplicates[remaining[i]] ? duplicates[remaining[i]] = duplicates[remaining[i]] + 1 : duplicates[remaining[i]] = 1
            if (duplicates[remaining[i]] > 1){
              continue
            }
            let remaining2 = remaining.slice()
            remaining2.splice(i,1)
            recursion(arr.concat(remaining[i]), remaining2)
        }
    }
    recursion([], nums)
    return result
};
