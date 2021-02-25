// given head of single linked list nodes are sorted in order of value, return link with no dup values, mod in place(no new list) node should still be sorted

function removeDuplicatesFromLinkedList(linkedList){
  let currNode = linkedList;

  while (currNode !== null){
    let unqiueNode = currNode.next;

    while (unqiueNode !== null && currNode.value === unqiueNode.value){
      unqiueNode = unqiueNode.next;
    }

    currNode.next = unqiueNode;
    currNode = unqiueNode
  }
  
  return linkedList;
}
