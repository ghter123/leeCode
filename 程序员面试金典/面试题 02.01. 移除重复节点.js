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
var removeDuplicateNodes = function(head) {
    const vals = new Map()
    const root = head
    let pre = head
    while(head) {
        if(vals.has(head.val)) {
            pre.next = head.next
        }else {
            vals.set(head.val)
            pre = head
        }
        head = head.next
    }
    return root
};