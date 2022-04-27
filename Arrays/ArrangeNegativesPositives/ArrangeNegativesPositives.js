//O(n) time and O(n) space
function reArrange1(arr2) {
    let arr = [...arr2];
    let neg = 0,
      pos = 0;
    let res = new Array(arr.length),
      i = 0;
    for (let no of arr) {
      if (no < 0) {
        neg++;
      } else pos++;
    }
    if (neg > pos) {
      i = 1;
      j = 0;
      let ind = 2*(pos-1);
      for (let no of arr) {
        if (no >= 0) {
          res[i] = no;
          i += 2;
          pos--;
        } else {
          res[j] = no;
          if (j>ind) {
            j++;
          } else {
            j += 2;
          }
        }
      }
    } else {
      i = 1;
      j = 0;
      let ind = 2*(neg-1);
      for (let no of arr) {
        if (no < 0) {
          res[j] = no;
          j += 2;
          neg--;
        } else {
          res[i] = no;
          if (i>ind) {
            i++;
          } else {
            i += 2;
          }
        }
      }
    }
    return res;
  }
  
  function reArrange2(arr2){
      let arr = [...arr2];
      let i,j,n=arr.length;
      for(i=0;i<n;i++){
        if(i%2==0){
          if(arr[i]<0)
            continue;
          for(j=i+1;j<n;j++){
            if(arr[j]<0){
              break;
            }
          }
        }else{
          if(arr[i]>0)
            continue;
          for(j=i+1;j<n;j++){
            if(arr[j]>0)
              break;
          }
        }
        if(j>=n)
          break;
        rotate(arr,i,j);
      }
      return arr;
  }

  function rotate(arr, start, end){
    let temp,temp2;
    temp=arr[start];
    arr[start]=arr[end];
    start++;
    while(start<=end){
      temp2=arr[start];
      arr[start]=temp;
      temp=temp2;
      start++;
    }
  }

  function reArrange3(arr2){
    let arr = [...arr2];
    let i,n=arr.length,j=n-1;
    for(i=0;i<j;i++){
      while(i<n && arr[i]>0){
        i++;
      }
      while(j>=0&&arr[j]<0){
        j--;
      }
      if(i<j){
        swap(arr,i,j);
      }
    }
    if(i==0||i==n){
      return arr; 
    }
    for(i=0,j=n-1;i<j;i+=2,j--){
      swap(arr,i,j);
    }
    return arr;
  }

  function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
  // console.log(reArrange1(arr));
  // console.log(reArrange2(arr));
  console.log(reArrange3(arr));
  