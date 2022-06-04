function method1(arr,k,target){
    let i,n=arr.length;
    for(i=0;i<n;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

function method2(arr,k,target){
    let i=0,n=arr.length,temp;
    while(i<n){
        if(arr[i]==target)
            return i;
        temp = Math.floor(Math.abs(target-arr[i])/k);
        if(temp==0)
            temp++;
        i+=temp;
    }
}

let arr = [4, 5, 6, 7, 6];
let k = 1;
let target = 6;
console.log(method1(arr,k,target))
console.log(method2(arr,k,target))

