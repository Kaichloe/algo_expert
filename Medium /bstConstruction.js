class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    
    if (this.value > value){
      if (this.right === null){
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === null){
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    let currentValue = this.value;

    if (currentValue > value && this.left !== null){
      this.left.contains(value);
    } else if (currentValue < value && this.right !== null){
      this.right.contains(value);
    } else if (currentValue === value){
      return true;
    } else if (this.value === null){
      return false;
    } 

    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
