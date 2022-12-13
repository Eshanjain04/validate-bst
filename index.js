const Node = require('./nodes');

const test ={
    checkBST: validateBST
}

let root = new Node(5);
root.left = new Node(1);
root.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node(9);

function validateBST(root){
    var helper = (root,max,min)=>{
        if(!root) return true;
        if(root.val>min && root.val<max){
            return helper(root.left,root.val,min) && helper(root.right,max,root.val);
        }
        return false;
    }

    return helper(root,Number.MAX_SAFE_INTEGER,Number.NEGATIVE_INFINITY);
}

module.exports = test;