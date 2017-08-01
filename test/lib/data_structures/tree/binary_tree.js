'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const BinaryTree = dsalg.data_structures.tree.binary_tree.BinaryTree;
const Node = dsalg.data_structures.tree.binary_tree.Node;

describe('Binary Tree', function() {
    const _intTree = new BinaryTree(new Node(
        100,

        new Node(
            50, new Node(25), new Node(75)),

        new Node(150,
            new Node(125,
                new Node(110), null),
            new Node(175, null, null)
         )));
    const intTree = { tree: _intTree };
    intTree.bft = [100, 50, 150, 25, 75, 125, 175, 110];
    intTree['dft-post'] = [25, 75, 50, 110, 125, 175, 150, 100];
    intTree['dft-pre'] = [100, 50, 25, 75, 150, 125, 110, 175];
    intTree['dft-in'] = [25, 50, 75, 100, 110, 125, 150, 175];

    const _J = new Node('J');
    const _I = new Node(_J, null, 'I');
    const _H = new Node(null, _I, 'H');
    const _D = new Node(_H, null, 'D');
    const _M = new Node(null, null, 'M');
    const _L = new Node(null, _M, 'L');
    const _K = new Node(_L, null, 'K');
    const _E = new Node(_K, null, 'E');
    const _B = new Node(_D, _E, 'B');
    const _F = new Node(null, null, 'F');
    const _S = new Node(null, null, 'S');
    const _R = new Node(_S, null, 'R');
    const _N = new Node(_R, null, 'N');
    const _Q = new Node(null, null, 'Q');
    const _P = new Node(null, _Q, 'P');
    const _O = new Node(null, _P, 'O');
    const _G = new Node(_N, _O, 'G');
    const _C = new Node(_F, _G, 'C');
    const _A = new Node(_B, _C, 'A');
    const _charTree = new BinaryTree(_A);
    const charTree = { tree: _charTree };
    charTree['bft'] = 'ABCDEFGHKNOILRPJMSQ';
    charTree['dft-post'] = 'JIHDMLKEBFSRNQPOGCA';
    charTree['dft-pre'] = 'ABDHIJEKLMCFGNRSOPQ';
    charTree['dft-in'] = 'HJIDBLMKEAFCSRNGOPQ';

    it('Instantiation', function() {
        const bt = new BinaryTree();
        assert.ok(bt instanceof BinaryTree);
    });
});
