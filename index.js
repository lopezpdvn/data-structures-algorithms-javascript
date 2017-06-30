'use strict';

const SRC_LIB = './src/lib';

exports.algorithms = {
    array_sorting: require(SRC_LIB + '/algorithms/array-sorting'),
    math: require(SRC_LIB + '/algorithms/math')
};

exports.data_structures = {
    linked_list: {
        singly_linked_list: require(SRC_LIB + '/data_structures/linked_list/singly_linked_list')
    },
    stack: {
        stack: require(SRC_LIB + '/data_structures/stack/stack')
    },
    tree: {
        binary_tree: require(SRC_LIB + '/data_structures/tree/binary_tree')
    },
    array: {
        sorted_array: require(SRC_LIB + '/data_structures/array/sorted_array')
    },
    built_in: require(SRC_LIB + '/data_structures/built_in')
};
