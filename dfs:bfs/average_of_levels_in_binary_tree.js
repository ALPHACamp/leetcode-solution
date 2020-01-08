/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let output = [];
    let queue = [];
    queue.push(root);
    while (queue.length!=0) {
        let tempq = [];
        let sum = 0;
        let count = 0;
        while (queue.length!=0) {
            let n = queue.pop();
            sum+=n.val;
            count++;
            if (n.left!=null) {
                tempq.push(n.left);
            }
            if (n.right!=null) {
                tempq.push(n.right);
            }
        }
        queue = tempq;
        output.push(sum/count);
    }
    return output;
};
