'use strict';

const assert = require('assert');

const dsalg = require('../../../..');
const directed_graph_adjacency_list = dsalg.data_structures.graph.directed_graph_adjacency_list

const DirectedGraphAdjacencyList = directed_graph_adjacency_list.DirectedGraphAdjacencyList;
const Node = directed_graph_adjacency_list.Node;
const State = directed_graph_adjacency_list.State;

describe('Directed Graph Adjacency List', function() {
    const graph0 = {};
    const graph0Graph = new DirectedGraphAdjacencyList();
    const A = new Node('A');
    const B = new Node('B');
    const C = new Node('C');
    const D = new Node('D');
    const E = new Node('E');
    const F = new Node('F');
    const G = new Node('G');
    const H = new Node('H');
    const I = new Node('I');
    const J = new Node('J');
    const K = new Node('K');
    const nodes = [A, B, C, D, E, F, G, H, I, J, K];
    A.addAdjacent(B);
    B.addAdjacent(A, C, J);
    C.addAdjacent(D, F);
    D.addAdjacent(H);
    E.addAdjacent(A, D);
    //F.addAdjacent();
    G.addAdjacent(D, I);
    H.addAdjacent(D, E, K);
    I.addAdjacent(F);
    J.addAdjacent(I);
    //K.addAdjacent();

    nodes.forEach(x => {
        graph0Graph.add(x)
        const nodeKey = x.vertex;
        graph0[nodeKey] = { node: x };
    });

    graph0['graph'] = graph0Graph;
    graph0['A']['dft-str'] = 'ABCDHEKFJI';
    graph0['B']['dft-str'] = 'BACDHEKFJI';
    graph0['C']['dft-str'] = 'CDHEABJIFK';
    graph0['D']['dft-str'] = 'DHEABCFJIK';
    graph0['E']['dft-str'] = 'EABCDHKFJI';
    graph0['F']['dft-str'] = 'F';
    graph0['G']['dft-str'] = 'GDHEABCFJIK';
    graph0['H']['dft-str'] = 'HDEABCFJIK';
    graph0['I']['dft-str'] = 'IF';
    graph0['J']['dft-str'] = 'JIF';
    graph0['K']['dft-str'] = 'K';

    graph0['A']['bft-str'] = 'ABCJDFIHEK';
    graph0['B']['bft-str'] = 'BACJDFIHEK';
    graph0['C']['bft-str'] = 'CDFHEKABJI';
    graph0['D']['bft-str'] = 'DHEKABCJFI';
    graph0['E']['bft-str'] = 'EADBHCJKFI';
    graph0['F']['bft-str'] = 'F';
    graph0['G']['bft-str'] = 'GDIHFEKABCJ';
    graph0['H']['bft-str'] = 'HDEKABCJFI';
    graph0['I']['bft-str'] = 'IF';
    graph0['J']['bft-str'] = 'JIF';
    graph0['K']['bft-str'] = 'K';

    const graph1Graph = new DirectedGraphAdjacencyList();
    const graph1 = { graph: graph1Graph };
    const nodeKeys = [...'ABCDEFGHIJK'];

    function traversalTest(traversalAlgorithm, traversalType) {

        nodeKeys.forEach(nodeKey => {
            graph0Graph.flagNodesUnvisited();
            let str = '';
            const startNode = graph0[nodeKey]['node'];
            const traversalSequence = graph0[nodeKey][traversalType];

            [...traversalAlgorithm(startNode)].forEach(
                node => str += node.vertex);

            assert.strictEqual(str, traversalSequence);
        });
    }

    it('Instantiation', function() {
        const graph0Graph = new DirectedGraphAdjacencyList();
        assert.ok(graph0Graph instanceof DirectedGraphAdjacencyList);
    });

    it('Depth First Traversal iterative', function() {
        traversalTest(graph0Graph.constructor.depthFirstTraversalIterative,
            'dft-str');
    });
});
