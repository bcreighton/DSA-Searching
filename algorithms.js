const BinarySearchTree = require('../../data-structures-algorithms/DSA-BTS/bst');
// linear search

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// binary search

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

//DFS

function dfs(values=[]) {
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}

//BFS
function bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}

const main = () => {
    const arr =[25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

    const BST = new BinarySearchTree();

    arr.map(n => BST.insert(n,n))
}

console.log(main())

/* 
3. I would approach this with a BTS as this will allow each book to be assigned a number and will cut back on search times regardless of teh size of the library.

4. 1. 25, 15, 14, 19, 27, 89, 79, 91, 90, 35
4. 2. 8, 5, 7, 6, 9, 11, 10, 8
*/