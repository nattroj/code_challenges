function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
var isValidBST = function(root) {
    let recurse = (node, min, max) => {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;
        
        let leftIsValid = recurse(node.left, min, node.val);
        let rightIsValid = recurse(node.right, node.val, max);

        console.log(leftIsValid, rightIsValid);
        
        return leftIsValid && rightIsValid;
    }
    
    return recurse(root, -Infinity, +Infinity);
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3))

console.log(isValidBST(tree));