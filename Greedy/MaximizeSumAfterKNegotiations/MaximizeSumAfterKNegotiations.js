function method1(arr, k) {
  arr.sort((a,b)=>a-b);
  console.log(arr);
  let n = arr.length;
  for (let i = 0; i < n && k > 0; i++) {
    if(arr[i]>0){
        break;
    }
    if (arr[i] == 0) {
      continue;
    } else {
      arr[i] = -arr[i];
      k--;
    }
  }
  arr.sort((a,b)=>a-b);
  let i=0;
  while(i<n && k>0){
      arr[i] = -arr[i];
      k--;
  }
  console.log(arr);
  let sum=0;
  for (let no of arr) {
    sum += no;
  }
  return sum;
}

let arr = [-1, -2, -3, -4, -5];
let k = 1;
console.log(method1(arr, k));