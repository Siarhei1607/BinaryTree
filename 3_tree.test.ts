const { BinaryTree } = require('../src/3_tree');

describe('Binary Search Tree', function() {
    let bst = new BinaryTree();

    test('Should init a new BST', function() {
        expect(bst).toBeDefined();
    });

    test('Should add new nodes', function() {
        bst.add(10);
        bst.add(5);
        expect(bst.check(5)).toBe(true);
        expect(bst.check(10)).toBe(true);
    });

    test('Should remove a node', function() {
        bst.add(10);
        bst.add(5);
        bst.add(13);
        bst.add(2);
        bst.delete(10);
        expect(bst.check(10)).toBe(false);
    });

    test('Should determine if is balanced', function() {
        bst.add(10);
        bst.add(5);
        bst.add(13);
        bst.add(2);
        expect(bst.isBalanced()).toBe(true);
    });

    test('Should return data in order', function() {
        bst.add(9);
        bst.add(4);
        bst.add(17);
        bst.add(3);
        bst.add(6);
        bst.add(22);
        bst.add(5);
        bst.add(7);
        bst.add(20);
        bst.add(10);
        expect(bst.isBalanced()).toBe(true);
    });

    test('Should return data in order', function() {
        bst.add(9);
        bst.add(4);
        bst.add(17);
        bst.add(3);
        bst.add(6);
        bst.add(22);
        bst.add(5);
        bst.add(7);
        bst.add(20);
        bst.add(10);
        expect(bst.levelOrder()).toEqual([ 9,4,17,3,6,10,22,5,7,20]);
        bst.delete(10);
        expect(bst.levelOrder()).toEqual([ 9,4,17,3,6,22,5,7,20]);
    });
});
