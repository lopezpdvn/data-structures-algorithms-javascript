'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    static *preOrderTraversalIterative(node, stack = []) {
        if(!node) {
            return;
        }
        stack.push(node);
        while(stack.length) {
            node = stack.pop();
            yield node;
            for(let i of node.adjacentReverse()) {
                stack.push(i);
            }
        }
    }

    static *postOrderTraversalIterative(node, stack = []) {
        let last = null;
        while(node || stack.length) {
            if(node) {
                stack.push(node);
                node = node.left;
            }
            else {
                let peek = stack[stack.length-1];
                if(peek.right && peek.right !== last) {
                    node = peek.right;
                }
                else {
                    last = stack.pop();
                    yield last;
                    node = null;
                }
            }
        }
    }

    static *inOrderTraversalIterative(node, stack = []) {
        while(stack.length || node) {
            if(node) {
                stack.push(node);
                node = node.left;
            }
            else {
                node = stack.pop();
                yield node;
                node = node.right;
            }
        }
    }

    static *breadthFirstTraversal(node, queue = []) {
        if(!node) {
            return;
        }
        yield node;
        queue.unshift(node);
        while(queue.length) {
            node = queue.pop();
            for(let i of node) {
                yield i;
                queue.unshift(i);
            }
        }
    }
}

BinaryTree.preOrderTraversalRecursive = function* f(node) {
    if(!node) {
        return;
    }
    yield node;
    yield* f(node.left);
    yield* f(node.right);
}

BinaryTree.inOrderTraversalRecursive = function* f(node) {
    if(!node) {
        return;
    }
    yield* f(node.left);
    yield node;
    yield* f(node.right);
}

class Node {
    constructor(vertex = null, left = null, right = null) {
        this.vertex = vertex;
        this.left = left;
        this.right = right;
    }

    *[Symbol.iterator]() {
        if(this.left) {
            yield this.left;
        }
        if(this.right) {
            yield this.right;
        }
    }

    *adjacentReverse() {
        if(this.right) {
            yield this.right;
        }
        if(this.left) {
            yield this.left;
        }
    }
}

exports.BinaryTree = BinaryTree;
exports.Node = Node;
