'use strict';

class StackDynamicArray {
    constructor() {
        this._a = [];
    }

    get size() {
        return this._a.length;
    }

    get isEmpty() {
        return this._a.length == 0;
    }

    push(node) {
        this._a.push(node);
        this.count += 1;
    }

    pop() {
        this.count -= 1;
        return this._a.pop();
    }

    peek() {
        return this._a[this._a.length - 1];
    }

    clear() {
        this._a.splice(0, this._a.length);
    }
}

exports.StackDynamicArray = StackDynamicArray;
