function method1(arr, n, target) {
  let i,
    j,
    k,
    l,
    ind = 0;
  let sum = 0;
  let res = [];
  for (i = 0; i < n - 3; i++) {
    for (j = i + 1; j < n - 2; j++) {
      for (k = j + 1; k < n - 1; k++) {
        for (l = k + 1; l < n; l++) {
          sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum == target) {
            res[ind++] = [arr[i], arr[j], arr[k], arr[l]];
          }
        }
      }
    }
  }
  res.sort();
  return res;
}



function method2(arr, n, target) {
  let i,
    j,
    k,
    l,
    temp = 0,
    ind = 0;
  let res = {};
  arr.sort((a,b)=>parseInt(a)-parseInt(b));
  console.log('arr is ', arr);
  for (i = 0; i < n-3; i++) {
    for (j = i + 1; j < n-2; j++) {
      k = j + 1;
      l = n - 1;
      while (k < l) {
          console.log("i : ",i,", j : ",j,", k : ",k,", l : ",l);
        temp = arr[i] + arr[j] + arr[k] + arr[l];
        if (temp == target) {
          let str = ''+arr[i]+arr[j]+arr[k]+arr[l];
          console.log('str is ', str);
          res[str] = [arr[i], arr[j], arr[k], arr[l]];
          k++;
          l--;
        }
        else if(temp>target){
            l--;
        }else{
            k++;
        }
      }
    }
  }
  return Object.values(res);
}

let arr = [-1, -2, -2, -2, -4, -5,  0,  0,  1]
let target = -9;
//console.log(method1(arr, arr.length, target));
console.log(method2(arr, arr.length, target));
