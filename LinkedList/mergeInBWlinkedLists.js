/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

// look thru list1 and check each until you get a, save that node as start and keep going until you find b.
const mergeInBetween = function(list1, a, b, list2) {
  const list2Head = list2;
  let list2Tail;
  let currentlist2Node = list2;

  while (currentlist2Node !== null){
    let nextNode = currentlist2Node.next;
    if (nextNode === null){
      list2Tail = currentlist2Node;
    }
  }

  // let list1Start;
  // let list1End;
  let currentList1Node = list1;
  let count = 1;

  while (currentList1Node !== null){
    if (count === a){
      // list1Start = currentList1Node;
      currentList1Node = currentList1Node.next;
      currentList1Node.next = list2Head;
    }

    if (count === b){
      list2Tail.next = currentList1Node;
      return;
    }
    count++
  }
};