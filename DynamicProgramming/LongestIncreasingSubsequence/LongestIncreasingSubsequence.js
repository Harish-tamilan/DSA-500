function method1(arr){
    let n = arr.length;
    let dp = new Array(n+1);
    dp.fill(1);
    let i,j;
    let max = 0;
    for(i=2;i<=n;i++){
        for(j=1;j<i;j++){
            if(arr[j]<arr[i]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

let arr = [];
console.log(method1(arr));