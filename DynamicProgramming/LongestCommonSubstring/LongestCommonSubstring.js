function method1(str, str2){
    let n = str.length;
    let n2 = str2.length;
    let dp = new Array(n+1);
    let i,j;
    for(i=0;i<=n;i++){
        dp[i] = new Array(n2+1);
        dp[i].fill(0);
    }
    let max=0;
    for(i=1;i<=n;i++){
        for(j=1;j<=n2;j++){
            if(str.charAt(i-1)==str2.charAt(j-1)){
                dp[i][j] = dp[i-1][j-1]+1;
                max = Math.max(dp[i][j],max);
            }else{
                dp[i][j] = 0;
            }
        }
    }
    return max;
}

let str="zxabcdezy";
let str2="yzabcdezx";
console.log(method1(str, str2));