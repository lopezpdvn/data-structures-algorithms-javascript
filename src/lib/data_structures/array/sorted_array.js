'use strict';

class SortedArrayNumber {
    constructor(size = 64) {
        this._arr = Array(size).fill(Number());
        this.count = 0;

        Object.defineProperty(this, 'array', {
            get: () => this._arr
        });
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

    delete(x) {
        const i = this.BinarySearchRecursive(x);
        if(i >= 0) {
            for(let j = i; j < this.count-1; j++) {
                this._arr[j] = this._arr[j+1];
            }
            this.count--;
        }
        return i;
    }

    [Symbol.iterator]() {
        return this._arr.slice(0, this.count)[Symbol.iterator]();
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
            swapped = false;
            for(let i = 0; i < o; i++) {
                if(a[i] > a[i+1]) {
                    [a[i], a[i+1]] = [a[i+1], a[i]];
                    swapped = true;
                }
            }
            // Invariant: a[o:] sorted
        }
    }

    static SelectionSort(a, n) {
        for(let o = 0, min = 0; o < n - 1; min = ++o) {
            for(let i = o + 1; i < n; i++) {
                if(a[i] < a[min]) {
                    min = i;
                }
            }
            if(o !== min) {
                [a[o], a[min]] = [a[min], a[o]];
            }
        }
    }

    BinarySearchIterative(x) {
        return this.constructor.BinarySearchIterative(
            this._arr, x, 0, this.count-1);
    }

    static BinarySearchIterative(a, x, min, max) {
        while(min <= max) {
            const mid = Math.trunc((min+max)/2);
            if(x < a[mid]) {
                max = mid - 1;
            }
            else if(x > a[mid]) {
                min = mid + 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }

    BinarySearchRecursive(x) {
        return this.constructor.BinarySearchRecursive(
            this._arr, x, 0, this.count-1);
    }
}

SortedArrayNumber.BinarySearchRecursive = function f(a, x, min, max) {
    if(min > max) {
        return -1;
    }
    const mid = Math.trunc((min + max) / 2);
    if(x < a[mid]) {
        return f(a, x, min, mid-1);
    }
    else if(x > a[mid]) {
        return f(a, x, mid+1, max);
    }
    else {
        return mid;
    }
}

exports.SortedArrayNumber = SortedArrayNumber;
