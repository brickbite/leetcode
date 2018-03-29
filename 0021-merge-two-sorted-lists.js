/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null && l2 !== null) {
        return l2;
    } else if (l1 !== null && l2 === null) {
        return l1;
    }
    
    let newList = new ListNode(Math.min(l1.val, l2.val));
    
    let temp = newList;
    
    if (Math.min(l1.val, l2.val) === l1.val) {
        l1 = l1.next;
    } else {
        l2 = l2.next;
    }
    
    while (l1 !== null && l2 !== null) {
        if (Math.min(l1.val, l2.val) === l1.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        temp = temp.next;
    }
    
    if (l1 === null) {
        while (l2 !== null) {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    } else if (l2 === null) {
        while (l1 !== null) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        }
    }
    
    return newList;
};
