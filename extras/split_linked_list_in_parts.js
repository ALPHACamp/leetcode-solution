/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let cur = root;
    let N = 0;
    while (cur!=null) {
        N++;
        cur = cur.next;
    }
    const width = Math.floor(N/k);
    let rem = N%k;
    let ans = new Array(k);
    for (let i=0; i<k; i++) {
        ans[i] = root;
        if (root!=null) {
            let curWidth = width;
            if (rem>0) {
                curWidth++;
                rem--;
            }
            for (let j=0; j<curWidth-1; j++) {
                root = root.next;
            }
            let temp = root.next;
            root.next = null;
            root = temp;
        }
    }
    return ans;
};
