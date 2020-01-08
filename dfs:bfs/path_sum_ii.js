/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let paths = [];
    let path = [];
    var helper = function(root,currentSum) {
        if (root!=null) {
            if (root.left==null&&root.right==null) {
                if (currentSum+root.val==sum) {
                    let path2 = [...path];
                    path2.push(root.val);
                    paths.push(path2);
                }
            }
            else {
                path.push(root.val);
                helper(root.left,currentSum+root.val);
                helper(root.right,currentSum+root.val);
                path.pop();
            }
        }
    }
    helper(root,0);
    return paths;
};
