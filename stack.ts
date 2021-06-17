class Stack<T>{
    constructor(public items= []) {}

    push(value:T) {
        this.items.push(value);
    }

    pop():T {
        return this.items.pop();
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.printStack());

console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.pop());

console.log(stack.printStack());