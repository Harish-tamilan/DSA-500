function method1(arr) {
  let n = arr.length;
  let dp = new Array(n);
  let i, j;
  for (i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  for (i = 0; i < n; i++) {
    dp[n - 1][i] = arr[n - 1][i];
  }
  let max = -9999;
  for (i = n - 2; i >= 0; i--) {
    for (j = 0; j < n; j++) {
      if (j == 0) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
      } else if (j == n - 1) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j - 1]);
      } else {
        dp[i][j] = Math.max(
          Math.max(dp[i + 1][j], dp[i + 1][j + 1]),
          dp[i + 1][j - 1]
        );
      }
      dp[i][j] += arr[i][j];
      max = Math.max(dp[i][j], max);
    }
  }
  return max;
}

let arr = [
  [2,2],
  [2,2],
];

console.log(method1(arr));