'use strict';

const graph = require('./graph');
const State = graph.State;

class DirectedGraphAdjacencyList {
    constructor(nodes = null, stack = [], queue = []) {
        this.count = 0;
        this.nodes = [];
    }

    add(node) {
        this.nodes.push(node);
        this.count++;
    }

    flagNodesUnvisited() {
        this.flagNodes(State.unvisited);
    }

    flagNodes(state = State.unvisited) {
        this.nodes.forEach(node => node.state = state);
    }

    static *depthFirstTraversalIterative(node, stack = []) {
        if(!node)
            return;
        stack.push(node);
        while(stack.length) {
            node = stack.pop();
            if(node.state == State.visited)
                continue;
            yield node;
            node.state = State.visited;
            for(let i of node.adjacentReverse()) {
                stack.push(i);
            }
        }
    }

    static *breadthFirstTraversal(node, queue = []) {
        if(!node && node.state == node.visited)
            return;
        yield node;
        node.state = State.visited;
        queue.unshift(node);
        while(queue.length) {
            node = queue.pop();
            for(let i of node) {
                if(i.state == State.visited)
                    continue;
                yield i;
                i.state = State.visited;
                queue.unshift(i);
            }
        }
    }
}

class Node {
    constructor(vertex = null, linkedList = []) {
        this.vertex = vertex;
        this.adjacent = [];
        this.state = 0;
    }

    addAdjacent(...nodes) {
        this.adjacent = this.adjacent.concat(nodes);
    }

    *adjacentReverse() {
        for(let i = this.adjacent.length - 1; i >= 0; i--) {
            yield this.adjacent[i];
        }
    }

    [Symbol.iterator]() {
        return this.adjacent[Symbol.iterator]();
    }
}

exports.DirectedGraphAdjacencyList = DirectedGraphAdjacencyList;
exports.Node = Node;
