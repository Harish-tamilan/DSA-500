function method1(arr){
    let n = arr.length, i;
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = arr[0];
    dp[2] = arr[0]+arr[1];
    for(let i=3;i<=n;i++){
        dp[i] = Math.max(dp[i-2]+arr[i-1], dp[i-3]+arr[i-1]+arr[i-2]);
    }
    return dp[n];
}

let arr = [1, 2, 3];
console.log(method1(arr));