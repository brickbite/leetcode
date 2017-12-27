/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
    
    let c1 = 0;
    let c2 = 0;
    let p1 = l1;
    let p2 = l2;

    let next = 0;
    
    let newList = new ListNode((p1.val + p2.val) % 10);
    (p1.val + p2.val) >= 10 ? next = 1 : null;
    
    let workingNode = newList;
    let tempVal = 0;
    let tempNode = null;
    
    p1 = p1.next;
    p2 = p2.next;
    
    while (p1 !== null && p2 !== null) {
        tempVal = p1.val + p2.val + next;
        tempVal >= 10 ? (next = 1, tempVal = tempVal % 10) : next = 0;
        
        tempNode = new ListNode(tempVal);
        workingNode.next = tempNode;
        workingNode = tempNode;

        p1 = p1.next;
        p2 = p2.next;
    }
    
    while (p1 !== null && p2 === null) {
        tempVal = p1.val + next;
        tempVal >= 10 ? (next = 1, tempVal = tempVal % 10) : next = 0;
        
        tempNode = new ListNode(tempVal);
        workingNode.next = tempNode;
        workingNode = tempNode;

        p1 = p1.next;
    }
    
    while (p1 === null && p2 !== null) {
        tempVal = p2.val + next;
        tempVal >= 10 ? (next = 1, tempVal = tempVal % 10) : next = 0;
        
        tempNode = new ListNode(tempVal);
        workingNode.next = tempNode;
        workingNode = tempNode;

        p2 = p2.next;
    }
    
    if (next > 0) {
        tempNode = new ListNode(next);
        workingNode.next = tempNode;
        workingNode = tempNode;
    }
    
    return newList;
};
