/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let len = 0;
    let current = head;
    while (current!=null) {
        len++;
        current = current.next;
    }
    let power_of_two = Math.pow(2,len-1);
    let current2 = head;
    let sum = 0;
    while (current2!=null) {
        if (current2.val==1) {
            sum+=power_of_two;
        }
        current2 = current2.next;
        power_of_two/=2;
    }
    return sum;
};
