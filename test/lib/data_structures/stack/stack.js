'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const StackDynamicArray = dsalg.data_structures.stack.stack.StackDynamicArray;

describe('StackDynamicArray', function() {
    it('Instantiation', function() {
        const stack = new StackDynamicArray();
        assert.ok(stack instanceof StackDynamicArray);
    });
});
