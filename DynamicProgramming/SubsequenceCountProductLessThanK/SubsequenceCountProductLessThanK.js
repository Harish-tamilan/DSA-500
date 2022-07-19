function method1(arr, k){
    let dp = new Array(k+1);
    let n = arr.length;
    let i,j;
    for(i=0;i<=k;i++){
        dp[i] = new Array(n+1);
        dp[i].fill(0);
    }
    let r,c;
    for(i=1;i<=k;i++){
        for(j=1;j<=n;j++){
            dp[i][j] = dp[i][j-1];
            if(arr[j-1]<=i){
                c = j-1;
                r = Math.floor(i/arr[j-1]);
                // console.log('r is ', r);
                // console.log('c is ', c);
                dp[i][j] += dp[r][c]+1;
            }
        }
    }
    return dp[k][n];
}

let arr = [4, 8, 7, 2];
let k = 50;
console.log(method1(arr, k));