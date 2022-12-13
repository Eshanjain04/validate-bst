This package will provide you a function checkBST which will validate whether your Binary tree is a Valid Binary Search Tree or not.
Make Your Binary tree and import this package and check whether it is valid Binary search tree or not.

# Usage
> Make your binary tree
>`class Node{`
    `constructor(val,left=null,right=null){`
        `this.val = val;`
        `this.left = left;`
        `this.right = right;`
    `}`
`}`
> `let root = new Node(5);`
`root.left = new Node(1);`
`root.right = new Node(7);`
`root.right.left = new Node(6);`
`root.right.right = new Node(9);`

>Import the package in your file
> `const validate = require('validate-bst');`
> Run the checkBST function and give root node as parameter.
>`console.log(validate.checkBST(root));`