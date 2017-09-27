'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const MaxBinaryHeapNumber = dsalg.data_structures.heap.binary_heap.MaxBinaryHeapNumber;

describe('Binary Heap', function() {
    it('Instantiation', function() {
        const h = new MaxBinaryHeapNumber();
        assert.ok(h instanceof MaxBinaryHeapNumber);
    });

    it('Trickle Down', function() {
        const notHeapArr = [0, 9, 6, 7, 4, 3, 2, 1, 5];
        const heapArr = [9, 7, 6, 5, 4, 3, 2, 1, 0];
        MaxBinaryHeapNumber.trickleDown(notHeapArr, 0, notHeapArr.length);
        assert.deepStrictEqual(notHeapArr, heapArr);
    });
});
