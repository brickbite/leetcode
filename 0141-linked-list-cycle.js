/*
141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    
    while (p1 !== null) {
        console.debug(p1);
        p1 = p1.next;
        if (p1 === null) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
        if (p1 === p2) {
            return true;
        }
    }
    
    return false;
};
