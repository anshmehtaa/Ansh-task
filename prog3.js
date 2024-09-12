//question 3 path sum
var PathSum= function(root,targetSum){
    if (!root){
        return false;
    }
    if (!root.left && !root.right && root.val === targetSum){
        return true;
    }
    return PathSum(root.left,targetSum-root.val)|| PathSum (root.right,targetSum-root.val);
};
console.log(PathSum ([],3));