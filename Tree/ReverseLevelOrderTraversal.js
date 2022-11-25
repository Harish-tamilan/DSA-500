function reverseLevelOrder(root){
    //code here
    let arr = [];
  arr.push(root);
  let res = [];
  while(arr.length>0){
      let num = arr[0];
      arr.splice(0,1);
      //console.log(num);
      res.push(num.data);
      if(num.right!=null){
          arr.push(num.right);
      }
      if(num.left!=null){
          arr.push(num.left)
      }
  }
  //console.log(res);
  let list = [];
  while(res.length>0){
      list.push(res.pop());
  }
  return list;
}