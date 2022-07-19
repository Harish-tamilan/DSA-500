function method1(arr){
    let n = arr.length;
    let dp = new Array(n+1);
    dp[1] = 1;
    let max = 0;
    for(let i=2;i<=n;i++){
        dp[i]=1;
        for(let j=i-1;j>=1;j--){
            if(arr[j-1]+1==arr[i-1] ||arr[j-1]-1==arr[i-1]){
                dp[i] = dp[j]+1;
                max = Math.max(max, dp[i]);
                break;
            }
        }
    }
    return max;
}

let arr = [1, 2, 3, 4, 5];
console.log(method1(arr));
