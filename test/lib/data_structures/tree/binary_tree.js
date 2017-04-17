'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const BinaryTree = dsalg.data_structures.tree.binary_tree.BinaryTree;

describe('Binary Tree', function() {
    it('Instantiation', function() {
        const bt = new BinaryTree();
        assert.ok(bt instanceof BinaryTree);
    });
});
