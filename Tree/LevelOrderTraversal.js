function levelOrder(node) {
  //your code here
  let arr = [];
  arr.push(node);
  let res = [];
  while (arr.length > 0) {
    let num = arr[0];
    arr.splice(0, 1);
    //console.log(num);
    res.push(num.data);
    if (num.left != null) {
      arr.push(num.left);
    }
    if (num.right != null) {
      arr.push(num.right);
    }
  }
  //console.log(res);
  return res;
}
