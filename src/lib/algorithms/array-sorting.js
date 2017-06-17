'use strict';

// ArraySorting
const ArraySorting = {};

ArraySorting.insertionSort = a => {
    for(let o = 1; o < a.length; o++) {
        for(let i = o; i > 0 && a[i] < a[i-1]; i--) {
            [a[i], a[i-1]] = [a[i-1], a[i]]
        }
        // Invariant: a[:o] is sorted
    }
}

Array.prototype.insertionSort = function () {
    ArraySorting.insertionSort(this);
}

exports.ArraySorting = ArraySorting;
