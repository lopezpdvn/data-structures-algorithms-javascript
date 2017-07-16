'use strict';

class SortedArrayNumber {
    constructor(size = 64) {
        this._arr = Array(size).fill(Number());
        this.count = 0;
    }

    insert(x) {
        let i;
        for(i = this.count; i > 0 && x < this._arr[i-1]; i--) {
            this._arr[i] = this._arr[i-1];
        }
        this._arr[i] = x;
        this.count++;
        return i;
    }

    [Symbol.iterator]() {
        return this._arr[Symbol.iterator]();
    }

    static InsertionSort(a, n) {
        for(let o = 1; o < n; o++) {
            for(let i = o; i > 0 && a[i] < a[i-1]; i--) {
                [a[i], a[i-1]] = [a[i-1], a[i]];
            }
        }
        // Invariant: a[:o] sorted
    }
}

exports.SortedArrayNumber = SortedArrayNumber;
