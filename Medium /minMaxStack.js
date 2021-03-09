class MinMaxStack {
	constructor(){
		this.minMaxStack = [];
		this.stack = [];
	}

  peek() {
    const top = this.stack.length - 1;
		return this.stack[top];
  }

  pop() {
		this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
		let newMinMax = {min: number, max: number};
		if (this.minMaxStack.length){
			const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
			newMinMax.min = Math.min(lastMinMax.min, number);
			newMinMax.max = Math.max(lastMinMax.max, number);
		}
		this.minMaxStack.push(newMinMax);
		this.stack.push(number);
  }

  getMin() {
		const lastIdx = this.minMaxStack.length - 1;
    return this.minMaxStack[lastIdx].min
  }

  getMax() {
		const lastIdx = this.minMaxStack.length - 1;
    return this.minMaxStack[lastIdx].max;
  }
}

// 01 for everything 