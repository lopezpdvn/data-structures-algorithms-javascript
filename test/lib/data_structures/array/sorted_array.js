'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const SortedArrayNumber = dsalg.data_structures.array.sorted_array.SortedArrayNumber;

describe('Sorted Array', function() {
    const sortedBig = [0, 111, 222, 333, 444, 555, 666,777, 888, 999];
    const sortedTwo = [222, 888];
    const sortedOne = [999];
    const sortedThree = [0, 333, 999];
    const sortedFour = [111, 444, 555, 666];
    const sortedEmpty = [];
    const numSorted = [sortedOne, sortedTwo, sortedThree, sortedFour,
        sortedBig, sortedEmpty];

    let unsortedBig, unsortedTwo, unsortedOne, unsortedThree, unsortedFour,
        unsortedEmpty, numUnsorted;

    beforeEach(function() {
        unsortedBig = [888, 222, 333, 0, 999, 777, 555, 111, 666, 444];
        unsortedTwo = [888, 222];
        unsortedOne = [999];
        unsortedThree = [333, 0, 999];
        unsortedFour = [555, 111, 666, 444];
        unsortedEmpty = [];
        numUnsorted = [unsortedOne, unsortedTwo, unsortedThree, unsortedFour,
            unsortedBig, unsortedEmpty];
    });

    const numArraySortingTest = sortingAlg => {
        numSorted.forEach((sortedArr, i) => {
            const unsortedArr = numUnsorted[i];
            sortingAlg(unsortedArr, unsortedArr.length);
            assert.deepEqual(unsortedArr, sortedArr);
        });
    }

    const numSortedArrayTest0 = (uArr, sArr) => {
        const sa = new SortedArrayNumber();
        assert.strictEqual(sa.count, 0);
        assert.strictEqual(-1, sa.delete(5));
        assert.strictEqual(-1, sa.delete(0));
        assert.strictEqual(sa.count, 0);

        uArr.forEach((x, i) => {
            sa.insert(x);
            assert.strictEqual(i+1, sa.count);
        });

        assert.deepStrictEqual(sArr, [...sa]);

        // Test Binary Search
        sArr.forEach((x, i) => {
            let foundIndex = sa.constructor.BinarySearchRecursive(
                sa.array, x, 0, sa.count-1);
            assert.strictEqual(foundIndex, i);
            //foundIndex = sa.constructor.BinarySearchIterative(
                //sa.array, x, 0, sa.count-1);
            //assert.strictEqual(foundIndex, i);
        });
    };

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
        for(let x of unsortedArr) {
            sa.insert(x);
        }
        assert.deepEqual(Array.from(sa), sortedArr);
        assert.strictEqual(sa.count, arrLen);
    });

    it('Insertion Sort', function() {
        numArraySortingTest(SortedArrayNumber.InsertionSort);
    });

    it('Binary Search Recursive', function() {
        const unsortedArr = [888, 222, 333, 0, 999, 777, 555, 111, 666, 444];
        const sortedArr = [0, 111, 222, 333, 444, 555, 666, 777, 888, 999];
        const maxLen = sortedArr.length;
        const a = new SortedArrayNumber(maxLen);
        assert.strictEqual(a.count, 0);
    });

    it('Bubble Sort', function() {
        numArraySortingTest(SortedArrayNumber.BubbleSort);
    });

    it('Selection Sort', function() {
        numArraySortingTest(SortedArrayNumber.SelectionSort);
    });

    it('SortedArrayNumber Insert/Delete/Search', function() {
        numSorted.forEach((sArr, i) => {
            const uArr = numUnsorted[i];
            numSortedArrayTest0(uArr, sArr);
        });
    });
});
