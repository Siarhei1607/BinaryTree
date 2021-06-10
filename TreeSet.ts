class TreeNode<T> {
    constructor(public value: T, public left: TreeNode<T> = null, public right: TreeNode<T> = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class TreeSet<T> {
    constructor(
        public root: TreeNode<T> = null
    ) {}

    add(value: T): boolean {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return true;
        } else {
            const searchTree = (node: TreeNode<T>): boolean => {
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

    check(data: T): boolean {
        let current = this.root;
        while (current) {
            if (data === current.value) {
                return true;
            }
            if (data < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    delete(data: T): void {
        const removeNode = (node: TreeNode<T>, data: T) => {
            if (node == null) {
                return null;
            }
            if (data == node.value) {

                if (node.left == null && node.right == null) {
                    return null;
                }

                if (node.left == null) {
                    return node.right;
                }

                if (node.right == null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (data < node.value) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }

    isBalanced(): boolean {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
    }

    findMinHeight(node: TreeNode<T> = this.root): number {
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

    findMaxHeight(node: TreeNode<T> = this.root): number {
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

    levelOrder(): Array<T> {
        let result = [];
        let queue = [];
        if (this.root != null) {
            queue.push(this.root);
            while (queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);
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
    }
}
