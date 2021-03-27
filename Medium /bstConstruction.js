class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    
		if (value < this.value){
			if (this.left === null){
				this.left = new BST(value)
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null){
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
    return this;
  }

contains(value) {
    let currentValue = this.value;

    if (currentValue > value){
      if (this.left === null){
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > currentValue){
      if (this.right === null){
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  remove(value, parent = null) {
    if (this.value > value){
      if (this.left !== null){
        this.left.remove(value, this)
      }
    } else if (value > this.value){
      if (this.right !== null){
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null){ //if has two child, always take min from right as replacement so all left will be less
        this.value = this.right.returnMin();
        this.right.remove(this.value, this);
      } else if (parent === null){ //if we removing root node, and the root only has either left or right we reassign
        if (this.left !== null){
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null){
          this.value = this.right.value;
          this.right = this.right.right;
          this.left = this.right.left;
        } else { // if it only has itself and no child nodes ask interviewer 

        }
      } else if (parent.left === this){ // we have found value and it only has one child node, need to reassign 
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this){
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    return this;
  }


  returnMin(){
    if (this.left === null){
      return this.value;
    } else {
      return this.left.returnMin();
    }
  }
}

// non recursive, same time complexity but now constant space 

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    
    while (true){
      if (value < currentNode.value){
        if (currentNode.left === null){
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null){
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } 
    }
    return this;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode !== null){
      if (currentNode.value < value){
        currentNode = currentNode.right;
      } else if (currentNode.value > value){
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode !== null){
      if ( currentNode.value > value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left !== null && currentNode.right !== null){
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null){
          if (currentNode.right !== null){
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else if (currentNode.left !== null){
            currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else {

          }
        } else if (parentNode.left  === currentNode){
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode){
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue(){ //smallest value is always left side 
    let currentNode = this;

    while (currentNode.left !== null){
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
