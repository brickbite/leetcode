/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    
    if (root.left === root.right) {
        return true;
    }
    
    const isTreeMirrored = (t1, t2) => {
        
        if (t1 === null && t2 !== null) {
            return false;
        }
        
        if (t1 !== null && t2 === null) {
            return false;
        }
        
        if (t1 === null && t2 === null) {
            return true;
        }
        
        let state = false;
        
        if (t1.val === t2.val) {
            state = true;
        }
        
        state 
            ? state = isTreeMirrored(t1.left, t2.right) 
            : null;
        state 
            ? state = isTreeMirrored(t1.right, t2.left) 
            : null;
        
        return state;
    };
    
    return isTreeMirrored(root.left, root.right);
};
