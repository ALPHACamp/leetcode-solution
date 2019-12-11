/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let lot = [];
    helper(root,lot,0);
    return lot;
};

var helper = function(root,lot,level) {
    if (root!=null) {
        if (lot.length<level+1) {
            lot.unshift([]);
        }
        lot[lot.length-1-level].push(root.val);
        helper(root.left,lot,level+1);
        helper(root.right,lot,level+1);
    }
}
