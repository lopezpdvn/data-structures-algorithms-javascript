﻿'use strict';

// ArraySorting
const ArraySorting = {};

ArraySorting.insertionSort = arr => {
    let i, o;
    for (o = 1; o < arr.length; o++) {
        for (i = o; i > 0 && arr[i] < arr[i - 1]; i--) {
            let tmp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
        }
        // Invariant: arr[:o] is sorted
    }
}

Array.prototype.insertionSort = function () {
    ArraySorting.insertionSort(this);
}

exports.ArraySorting = ArraySorting;
