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
var mergeTwoLists = function (l1, l2) {
    if (l1.val > l2.val) {
        curHead = l2
        insertHead = l1
    } else {
        curHead = l1
        insertHead = l2
    }
    while (insertHead) {
        while (curHead.val < insertHead.val) curHead = curHead.next
        while (insertHead.val < curHead.next.val) insertHead = insertHead.next
    }
};