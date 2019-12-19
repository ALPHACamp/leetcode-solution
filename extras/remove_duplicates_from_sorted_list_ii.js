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
    let dummy = new ListNode(0);
    let d = dummy;
    while (head!=null) {
        if (head.next!=null&&head.val==head.next.val) {
            while (head.next!=null&&head.val==head.next.val) {
                head = head.next;
            }
        }
        else {
            d.next = head;
            d = d.next;
        }
        head = head.next;
    }
    d.next = null;
    return dummy.next;
};
