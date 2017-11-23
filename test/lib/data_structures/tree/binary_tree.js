'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const BinaryTree = dsalg.data_structures.tree.binary_tree.BinaryTree;
const Node = dsalg.data_structures.tree.binary_tree.Node;

describe('Binary Tree', function() {
    const _numTree = new BinaryTree(new Node(
        100,

        new Node(
            50, new Node(25), new Node(75)),

        new Node(150,
            new Node(125,
                new Node(110), null),
            new Node(175, null, null)
         )));
    const numTree = { tree: _numTree };
    numTree.bft = [100, 50, 150, 25, 75, 125, 175, 110];
    numTree['dft-post'] = [25, 75, 50, 110, 125, 175, 150, 100];
    numTree['dft-pre'] = [100, 50, 25, 75, 150, 125, 110, 175];
    numTree['dft-in'] = [25, 50, 75, 100, 110, 125, 150, 175];

    const _J = new Node('J');
    const _I = new Node('I', _J, null);
    const _H = new Node('H', null, _I);
    const _D = new Node('D', _H, null);
    const _M = new Node('M', null, null);
    const _L = new Node('L', null, _M);
    const _K = new Node('K', _L, null);
    const _E = new Node('E', _K, null);
    const _B = new Node('B', _D, _E);
    const _F = new Node('F', null, null);
    const _S = new Node('S', null, null);
    const _R = new Node('R', _S, null);
    const _N = new Node('N', _R, null);
    const _Q = new Node('Q', null, null);
    const _P = new Node('P', null, _Q);
    const _O = new Node('O', null, _P);
    const _G = new Node('G', _N, _O);
    const _C = new Node('C', _F, _G);
    const _A = new Node('A', _B, _C);
    const _charTree = new BinaryTree(_A);
    const charTree = { tree: _charTree };
    charTree['bft'] = 'ABCDEFGHKNOILRPJMSQ';
    charTree['dft-post'] = 'JIHDMLKEBFSRNQPOGCA';
    charTree['dft-pre'] = 'ABDHIJEKLMCFGNRSOPQ';
    charTree['dft-in'] = 'HJIDBLMKEAFCSRNGOPQ';

    function traversalTest(traversalAlgorithm, traversalType) {
        let traversalStrSeq = '';
        const traversalStrSeqCorrect = charTree[traversalType];
        [...traversalAlgorithm(charTree.tree.root)].forEach(node =>
            traversalStrSeq += node.vertex);
        assert.strictEqual(traversalStrSeq, traversalStrSeqCorrect);

        const traversalNumSeqCorrect = numTree[traversalType];
        const traversalNumSeq =
            [...traversalAlgorithm(numTree.tree.root)].map(x => x.vertex);
        assert.deepStrictEqual(traversalNumSeq, traversalNumSeqCorrect);
    }

    it('Instantiation', function() {
        const bt = new BinaryTree();
        assert.ok(bt instanceof BinaryTree);
    });

    it('Post-Order Depth First Traversal iterative', function() {
        const traversalType = 'dft-post';
        traversalTest(numTree.tree.constructor.postOrderTraversalIterative,
            traversalType);
        traversalTest(charTree.tree.constructor.postOrderTraversalIterative,
            traversalType);
    });

    it('Pre-Order Depth First Traversal recursive', function() {
        const traversalType = 'dft-pre';
        traversalTest(numTree.tree.constructor.preOrderTraversalRecursive,
            traversalType);
        traversalTest(charTree.tree.constructor.preOrderTraversalRecursive,
            traversalType);
    });
});
