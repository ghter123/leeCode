/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let lastKHead = Object.assign({},head)
    while(k-- && head){
        head = head.next
    }
    while(head) {
        lastKHead = lastKHead.next
        head = head.next
    }
    return lastKHead
};