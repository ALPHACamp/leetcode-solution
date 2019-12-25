/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root,null,null);
};

var helper = function(root,lower,upper) {
    if (root!=null) {
        if (lower!=null&&root.val<=lower) {
            return false;
        }
        if (upper!=null&&root.val>=upper) {
            return false;
        }
        return helper(root.left,lower,root.val)&&helper(root.right,root.val,upper);
    }
    return true;
};
