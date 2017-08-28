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

    static BubbleSort(a, n) {
        for(let swapped = true, o = n - 1; swapped && o > 0; o--) {
            for(let swapped = false, i = 0; i < o; i++) {
                if(a[i] > a[i+1]) {
                    [a[i], a[i+1]] = [a[i+1], a[i]];
                    swapped = true;
                }
            }
            // Invariant: a[o:] sorted
        }
    }
}

exports.SortedArrayNumber = SortedArrayNumber;
