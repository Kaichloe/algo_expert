 function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
}

var reverseList = function(head, previous = null) {
  debugger
  if (head === null) return previous;
  let next = head.next;
  head.next = previous;
  return reverseList(next, head)
}

function reverseLinkedlist(head){
  let previousNode = null;
  let currentNode = head;

  while (currentNode !== null){
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}