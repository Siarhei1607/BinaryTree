class StackNode {
    public data: number;
    public next: StackNode | null;

    constructor(data: number, next: StackNode | null = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    public top: StackNode | null;
    public size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data: number) {
        let node: StackNode = new StackNode(data);
        let currentTop: StackNode | null = this.top;

        if(!this.top) {
            this.top = node;
        } else {
            this.top = node;
            this.top.next = currentTop;
        }

        this.size++;
    }

    pop() {
        if(this.size == 1) {
            this.reinicialize();
            return;

        } else if(this.size <= 0) {
            console.log("Stack is empty");
            return;
        }

        let currentTopNext: StackNode | null = this.top!.next;
        this.top = currentTopNext;
        this.size--;
    }

    reinicialize() {
        this.top = null;
        this.size = 0;
    }

    printStack(): void {
        let top: number | string = this.top ? this.top.data : 'null';
        let currentNode: StackNode | null = this.top;

        console.log("Top: " + top);

        while(currentNode) {

            if(currentNode.next) {
                console.log("data: " + currentNode.data + " | next: " + currentNode.next.data)
            } else {
                console.log("data: " + currentNode.data);
            }

            currentNode = currentNode.next;
        }
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