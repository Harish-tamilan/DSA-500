function smallestSubarrayWithSumGreater(arr, k) {
  let i=0,n=arr.length,sum=0;
  let start=0,len=n+1;
  while(i<n){
      while(i<n && sum<=k){
          sum+=arr[i];
          i++;
      }
      while(sum>k && start<n){
          if(i-start<len){
              len = i-start;
          }
          sum = sum-arr[start++];
      }
  }
  console.log('start is ', start);
  return len;
}

let arr = [1, 4, 45, 6, 10, 19];
let x = 51;
console.log(smallestSubarrayWithSumGreater(arr, x));
