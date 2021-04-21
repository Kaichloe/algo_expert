//bfs is checking per level of the tree
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0){
      const currentNode = queue.shift();
      array.push(currentNode.name);
      for (const child of currentNode.children){
        queue.push(child);
      }
    }
    return array;
  }
}