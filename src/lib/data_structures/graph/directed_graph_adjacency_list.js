'use strict';

const graph = require('./graph');

const State = graph.State;

class DirectedGraphAdjacencyList {
    constructor(nodes = null, stack = [], queue = []) {
        if(nodes) {
            this.count = nodes.length;
        }
        else {
            this.count = 0;
        }
    }
}

class Node {
    constructor(vertex = null, linkedList = []) {
        this.vertex = vertex;
        this.adjacent = [];
        this.count = 0;
        this.state = 0;
    }

    addAdjacent(...nodes) {
        this.adjacent = this.adjacent.concat(nodes);
    }
}

exports.DirectedGraphAdjacencyList = DirectedGraphAdjacencyList;
exports.Node = Node;
