function method1(n, f){
    let dp = new Array(n+1);
    let i,j,k,max;
    for(i=0;i<=n;i++){
        dp[i] = new Array(f+1);
        dp[i].fill(0);
    }
    for(i=0;i<=f;i++){
        dp[1][i] = i;
    }
    for(i=2;i<=n;i++){
        for(j=1;j<=f;j++){
            dp[i][j] = 9999;
            //console.log("dp[",i,"][",j,"] : ",dp[i][j]);
            for(k=1;k<=j;k++){
                max = 1+Math.max(dp[i-1][k-1], dp[i][j-k]);
                if(max<dp[i][j]){
                    dp[i][j] = max;
                }
            }
            //console.log("dp[",i,"][",j,"] : ",dp[i][j]);
        }
    }
    //console.log(dp);
    return dp[n][f];
}

let n=2, f=10;
console.log(method1(n, f));