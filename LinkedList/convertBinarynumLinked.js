/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  let currentNode = head;
  let binaryArr = [];

  while (currentNode !== null){
    binaryArr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  
  let binaryString = binaryArr.join("");
  const value = parseInt(binaryString, 2);

  return value;
};