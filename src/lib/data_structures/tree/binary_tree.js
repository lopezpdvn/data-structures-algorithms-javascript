'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
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
}

class Node {
    constructor(vertex = null, left = null, right = null) {
        this.vertex = vertex;
        this.left = left;
        this.right = right;
    }
}

exports.BinaryTree = BinaryTree;
exports.Node = Node;
