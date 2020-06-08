/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const nums = []
    while (head != null) {
        nums.unshift(head.val)
        head = head.next
    }
    return nums
};