'use strict';

const SRC_LIB = './dist/lib';

exports.algorithms = {
    array_sorting: require(SRC_LIB + '/algorithms/array-sorting'),
    math: require(SRC_LIB + '/algorithms/math')
};

exports.data_structures = {
    linked_list: {
        singly_linked_list: require(SRC_LIB + '/data_structures/linked_list/singly_linked_list')
    }
};
