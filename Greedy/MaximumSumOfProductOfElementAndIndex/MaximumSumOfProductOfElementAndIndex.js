function method1(arr){
    arr.sort((a,b)=>a-b);
    let sum=0;
    let n = arr.length
    for(let i=0;i<n;i++){
        sum += arr[i]*i;
    }
    return sum;
}

let arr = [];
console.log(method1(arr)); 