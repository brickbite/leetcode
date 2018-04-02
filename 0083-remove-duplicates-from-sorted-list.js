/*
83. Remove Duplicates from Sorted List
DescriptionHintsSubmissionsDiscussSolution
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let write = head;
    let read = head;
    
    while (read !== null) {
        if (write.val !== read.val) {
            write = write.next;
        } else {
            write.next = read.next;
        }
        read = read.next;
    }
    
    return head;
};
