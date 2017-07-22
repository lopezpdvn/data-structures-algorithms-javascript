'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const SortedArrayNumber = dsalg.data_structures.array.sorted_array.SortedArrayNumber;

describe('Sorted Array', function() {
    it('Instantiation', function() {
        const sa = new SortedArrayNumber();
        assert.ok(sa instanceof SortedArrayNumber);
    });

    it('Insert', function() {
        const unsortedArr = [9, 6, 2, 5, 1, 0, 10];
        const arrLen = unsortedArr.length;
        const initArr = Array(arrLen).fill(Number());
        const sortedArr = [0, 1, 2, 5, 6, 9, 10];
        const sa = new SortedArrayNumber(arrLen);

        assert.strictEqual(sa.count, 0);
        assert.deepEqual(Array.from(sa), initArr);
        for(let x of unsortedArr) {
            sa.insert(x);
        }
        assert.deepEqual(Array.from(sa), sortedArr);
        assert.strictEqual(sa.count, arrLen);
    });

    it('Insertion Sort', function() {
        const unsortedArr = [9, 6, 2, 5, 1, 0, 10];
        const sortedArr = [0, 1, 2, 5, 6, 9, 10];
        SortedArrayNumber.InsertionSort(unsortedArr, unsortedArr.length);
        assert.deepEqual(sortedArr, unsortedArr);
    });

    it('Binary Search Recursive', function() {
        const unsortedArr = [888, 222, 333, 0, 999, 777, 555, 111, 666, 444];
        const sortedArr = [0, 111, 222, 333, 444, 555, 666, 777, 888, 999];
        const maxLen = sortedArr.length;
        const a = new SortedArrayNumber(maxLen);
        assert.strictEqual(a.count, 0);
    });
});
