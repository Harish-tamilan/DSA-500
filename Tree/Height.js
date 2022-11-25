function height(node, h){
    if(node==null){
        return h;
    }
    let l = height(node.left, h+1);
    let r = height(node.right, h+1);
    return Math.max(l, r);
}

class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {
        //your code here
        return height(node,0);
        
    }
}