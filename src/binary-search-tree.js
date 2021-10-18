const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

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

    add(data) {
        function insertNode(node, newNode){
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                };
            };
        };

        let newNode = new Node(data);

        if (this.treeRoot === null) {
            this.treeRoot = newNode;
        } else {
            insertNode(this.treeRoot, newNode);
        };
    }

    has(data) {
        if (this.find(data)) {
            return true;
        } else {
            return false;
        }
    }

    find(data) {
        function searchNode(node, data) {
            if (node === null) {
                return null;
            } else if (data === node.data) {
                return node;
            } else if (data < node.data) {
                return searchNode(node.left, data);
            } else {
                return searchNode(node.right, data);
            }
        }

        return searchNode(this.treeRoot, data);
    }
    
    remove(data) {
        function findMinNode(node) {
            if (node.left === null) {
                return node;
            } else {
                return findMinNode(node.left);
            }
        }
        
        function removeNode(node, data) {
            if (node === null) {
                return null;
            } else {
                if (data < node.data) {
                    node.left = removeNode(node.left, data);
                    return node;
                } else if (data > node.data) {
                    node.right = removeNode(node.right, data);
                    return node;
                } else {
                    if (node.left === null && node.right === null) {
                        node = null;
                        return node;
                    } if (node.left === null) {
                        node = node.right;
                        return node;
                    } else if (node.right === null) {
                        node = node.left;
                        return node;
                    } else {
                        let minNode = findMinNode(node.right);
                        node.data = minNode.data;
                        node.right = removeNode(node.right, minNode.data);
                        return node;
                    }
                }
            }
        }

        this.treeRoot = removeNode(this.treeRoot, data);
    }

    min() {
        let node = this.treeRoot;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        let node = this.treeRoot;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}