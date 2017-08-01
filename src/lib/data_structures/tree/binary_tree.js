'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    static inOrderDFTRecursive(node) {
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
