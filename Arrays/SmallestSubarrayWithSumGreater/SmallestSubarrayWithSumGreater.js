function smallestSubWithSum(arr,n,k){
    //code here
    let sum=arr[0], right=0, left=0, len=Number.MAX_VALUE, temp=0;
while(right<n){
     if(sum<=k){
        right++;
        sum += arr[right];
    }
    if(sum>k){
        temp = right-left;
        if(temp<len){
            len = temp;
        }
        sum-=arr[left];
        left++;
    }
}
return len+1;
}

let arr = [1, 4, 45, 6, 10, 19];
let x = 51;
console.log(smallestSubWithSum(arr, x));
