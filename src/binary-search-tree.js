const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

    constructor() {
        this.treeRoot = null;
    }

    root() {
        return this.treeRoot;
    }

    add(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    has(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    find(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

}