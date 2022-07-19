function maxOfThree(x, y, z) {
  return Math.max(x, Math.max(y, z));
}

function method1(n, x, y, z, dp) {
  if(n==0){
      return 0;
  }
  if(dp[n]!=-1){
      return dp[n];
  }
  let no=-9999, no2=-9999, no3=-9999;
  if(x<=n){
    no = method1(n-x, x, y, z, dp);
  }
  if(y<=n){
    no2 = method1(n-y, x, y, z, dp);
  }
  if(z<=n){
   no3 = method1(n-z, x, y, z, dp);
  }
  console.log('no is ', no, ', no2 is ', no2, ', no3 is ', no3);
  console.log('dp[',n,'] is ',1+Math.max(no, no2, no3));
  dp[n] = 1+Math.max(no, no2, no3);
  return dp[n];
}

let N= 4, x = 2, y = 1, z = 1;

let dp = new Array(N+1);

dp.fill(-1);

console.log(method1(N, x, y, z, dp));
