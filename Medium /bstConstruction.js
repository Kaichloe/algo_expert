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


