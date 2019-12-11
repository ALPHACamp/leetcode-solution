/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function(root) {
    let sum = 0;
    var convertBST2 = function(root) {
        if (root!=null) {
            convertBST2(root.right);
            sum += root.val;
            root.val = sum;
            convertBST2(root.left);
        }
    }
    convertBST2(root);
    return root;
};
