﻿exports.ArraySorting = ArraySorting;

// ArraySorting
function ArraySorting() {
}

ArraySorting.prototype.insertionSort = function (arr) {
    var i, o;
    for (o = 1; o < arr.length; o++) {
        for (i = o; i > 0 && arr[i] < arr[i - 1]; i--) {
            var tmp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
        }
        // Invariant: arr[:o] is sorted
    }
}