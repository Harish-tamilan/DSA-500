function method1(arr,m){
    arr.sort((a,b)=>a-b);
    let i,count=Number.MAX_VALUE,n=arr.length;
    for(i=0;(i+m-1)<n;i++){
        count = Math.min(count, arr[i+m-1]-arr[i]);
    }
    return count;
}

let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;
console.log(method1(arr, m));