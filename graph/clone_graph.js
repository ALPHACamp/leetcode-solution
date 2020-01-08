/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let clonedNodes = {};
    var cloneNode = function(node) {
        if (node.val in clonedNodes) {
            return clonedNodes[node.val];
        }
        let clonedNode = new Node(node.val,[]);
        clonedNodes[node.val] = clonedNode;
        let neighbors = node.neighbors;
        for (let i=0; i<neighbors.length; i++) {
            clonedNode.neighbors.push(cloneNode(neighbors[i]));
        }
        return clonedNode;
    }
    cloneNode(node);
    return clonedNodes[node.val];
};
