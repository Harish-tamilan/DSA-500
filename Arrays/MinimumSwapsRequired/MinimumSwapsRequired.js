function method1(arr, k, n){
    let i=0,j,count=0, temp=0, swaps=Number.MAX_VALUE;
    for(let no of arr){
        if(no<=k)
            count++;
    }
    for(i=0;i<count;i++)
    {
        if(arr[i]>k){
            temp++;
        }
    }
    swaps = temp;
    for(i=1,j=count;j<n;i++,j++){
        if(arr[i-1]<=k){
            temp++;
        }
        if(arr[j]<=k){
            temp--;
        }
        swaps = Math.min(temp, swaps);
    }
    return swaps;
}

let arr = [2, 1, 5, 6, 3];
let k = 3;

console.log(method1(arr,k, arr.length));