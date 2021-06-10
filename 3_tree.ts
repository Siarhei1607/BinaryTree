class TreeNode {

    constructor(public value: number, public left: TreeNode = null, public right: TreeNode = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(
        public root: TreeNode = null
    ) {}

    add(value: number): boolean {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return true;
        } else {
            const searchTree = (node: TreeNode): boolean => {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new TreeNode(value);
                        return true;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new TreeNode(value);
                        return true;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    }
                } else {
                    return false;
                }
            };
            return searchTree(this.root);
        }
    }

    check(value: number): boolean {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    delete(value: number): void {
        const removeNode = (node: TreeNode, value: number) => {
            if (node === null) {
                return null;
            }
            if (value === node.value) {

                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };
        this.root = removeNode(this.root, value);
    }

    isBalanced(): boolean {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
    }

    findMinHeight(node: TreeNode = this.root): number {
        if (node == null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node: TreeNode = this.root): number {
        if (node == null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    levelOrder() {
        let result = [];
        let queue = [];
        if (this.root != null) {
            queue.push(this.root);
            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.value);
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    };
}

export {BinaryTree, TreeNode}




