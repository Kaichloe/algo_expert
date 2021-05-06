/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

//search thru linked list and head, map values on two array then compare the two
var isSubPath = function(head, root) {
    if(!root) return false
    if(dfs(head, root)) return true
    return isSubPath(head, root.left) || isSubPath(head, root.right)
};

function dfs(head, node) {
    if(!head) return true
    if(!node) return false
    if(node.val !== head.val) return false
    return dfs(head.next, node.left) || dfs(head.next, node.right)
}