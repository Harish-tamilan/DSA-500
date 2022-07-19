function paintingTheFence(n, k){
    let arr = new Array(n);
    arr[0] = k;
    for(let i=1;i<n;i++){
        arr[i] = arr[i-1]+(arr[i-1])*(k-1);
    }
    return arr[n-1];
}

let n = 2, k = 4;
console.log(paintingTheFence(n, k));