function method1(arr,k){
    arr.sort((a,b)=>a-b);
    let count=0;
    let i=0,n=arr.length,j;
    for(i=0,j=i+1;i<n && j<n;j++){
        if(arr[j]-arr[i]>k){
            count++;
            i++;
        }
    }
    return count
}

let arr = [1, 5, 6, 2, 8];
let k = 2;
console.log(method1(arr, k));