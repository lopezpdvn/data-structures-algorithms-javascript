const SRC_LIB = './dist/lib';

exports.algorithms = require(SRC_LIB + '/algorithms/array-sorting');
exports.data_structures = {
    linked_list: {
        singly_linked_list: require(SRC_LIB + '/data_structures/linked_list/singly_linked_list')
    }
};
