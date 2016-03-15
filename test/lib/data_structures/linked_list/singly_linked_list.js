const assert = require('assert');
const path = require('path');

const dsalg = require('../../../..');

const SinglyLinkedList = dsalg.data_structures.linked_list.singly_linked_list.SinglyLinkedList;

describe('Singly Linked List', function () {
    it('Instantiation', function () {
        const list0 = new SinglyLinkedList();
        assert.ok(list0 instanceof SinglyLinkedList);
        assert.ok(!(list0 instanceof Array));
    });
});
