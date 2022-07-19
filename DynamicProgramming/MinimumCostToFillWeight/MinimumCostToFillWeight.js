function method1(arr, w) {
  let wt = [];
  let val=[];
  let i = 0,
    j;
  for (let no of arr) {
    if (no != -1) {
      wt.push(arr[i]);
      val.push(i+1);
    }
    i++;
  }
  let n = wt.length;
  let dp = new Array(n + 1);
  for (i = 0; i <= n; i++) {
    dp[i] = new Array(w + 1);
  }
  for (i = 0; i <= w; i++) {
    dp[0][i] = 999999;
  }
  for (i = 1; i <= n; i++) {
    dp[i][0] = 0;
  }
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= w; j++) {
      if (val[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j],
          dp[i][j - val[i - 1]] + wt[i-1]
        );
      }
    }
  }
  console.log(dp);
  return dp[n][w]==999999?-1:dp[n][w];
}

let arr = [-1, -1, 4, 3, -1];
let w = 5;
console.log(method1(arr, w));
