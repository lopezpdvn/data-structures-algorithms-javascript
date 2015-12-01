var assert = require('assert');
var path = require('path');

// All file-based modules are relative to root of package
var rootPkgPrefix = "..";
var packageJSON = require(path.join(rootPkgPrefix, 'package'));
var dsalg = require(path.join(rootPkgPrefix,
    packageJSON.dependencies["data-structures-algorithms"]
    .replace(/^file:/, "")));

describe('Array Sorting', function () {
    var ArraySorting = dsalg.algorithms.ArraySorting;
    var unsortedIntArray = [9, 6, 2, 5, 1, 0, 10];
    var sortedIntArray = [0, 1, 2, 5, 6, 9, 10];
    it('Insertion Sort', function () {
        ArraySorting.insertionSort(unsortedIntArray);
        assert.deepEqual(unsortedIntArray, sortedIntArray);
    });
});
