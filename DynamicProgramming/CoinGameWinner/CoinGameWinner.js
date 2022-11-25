function coinGameWinner(x, y, n){
    let arr = new Array(n+1);
    arr[0] = false;
    arr[1] = true;
    let i;
    for(i=2;i<=n;i++){
        if(!arr[i-1]){
            arr[i] = true;
        } else if(i>=x && !arr[i-x]){
            arr[i] = true;
        } else if(i>=y && !arr[i-y]){
            arr[i] = true;
        } else{
            arr[i] = false;
        }
    }
    console.log(arr);
    return arr[n];
}

let x = 2, y=3, n=5;
console.log(coinGameWinner(x, y, n));