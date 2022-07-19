function method1(arr, n, m) {
  let i, j;
  let dp = new Array(n);
  for (i = 0; i < n; i++) {
    dp[i] = new Array(m);
    dp[i].fill(0);
  }
  for (i = 0; i < n; i++) {
    dp[i][m - 1] = arr[i][m - 1];
  }
  //console.log(dp);
  for (i = m - 2; i >= 0; i--) {
    for (j = 0; j < n; j++) {
      if (j == 0 && j == n - 1) {
        dp[j][i] = arr[j][i] + dp[j][i + 1];
      } else if (j == 0) {
        dp[j][i] = arr[j][i] + Math.max(dp[j][i + 1], dp[j + 1][i + 1]);
      } else if (j == n - 1) {
        dp[j][i] = arr[j][i] + Math.max(dp[j][i + 1], dp[j - 1][i + 1]);
      } else {
        dp[j][i] =
          arr[j][i] +
          Math.max(dp[j - 1][i + 1], Math.max(dp[j][i + 1], dp[j + 1][i + 1]));
      }
    }
  }
  //console.log(dp);
  let max = 0;
  for (i = 0; i < n; i++) {
    max = Math.max(max, dp[i][0]);
  }
  return max;
}

let arr = [
  [2, 1],
  [1, 2],
];

console.log(method1(arr, arr.length, arr[0].length));
