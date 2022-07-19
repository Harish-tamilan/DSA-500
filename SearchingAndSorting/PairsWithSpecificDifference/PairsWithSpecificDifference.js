function method1(arr, k) {
  arr.sort((a, b) => a - b);
  let sum=0;
  let n=arr.length;
  for(let i=n-1;i>0;){
      if(arr[i]-arr[i-1]<k){
        sum += arr[i]+arr[i-1];
        i-=2;
      }else{
        i--;
      }
  }
  return sum;
}

let arr = [5, 15, 10, 300];
let k = 12;
console.log(method1(arr, k));
