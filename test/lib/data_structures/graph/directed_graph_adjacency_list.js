'use strict';

const assert = require('assert');

const dsalg = require('../../../..');
const directed_graph_adjacency_list = dsalg.data_structures.graph.directed_graph_adjacency_list

const DirectedGraphAdjacencyList = directed_graph_adjacency_list.DirectedGraphAdjacencyList;
const Node = directed_graph_adjacency_list.Node;
const State = directed_graph_adjacency_list.State;

describe('Directed Graph Adjacency List', function() {
    let dirGraph = undefined;
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

    it('Instantiation', function() {
        dirGraph = new DirectedGraphAdjacencyList();
        //nodes.forEach(x => dirGraph.add(x));
        assert.ok(dirGraph instanceof DirectedGraphAdjacencyList);
    });
});
