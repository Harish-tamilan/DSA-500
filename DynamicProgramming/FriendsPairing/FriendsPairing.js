function method1(n, dp) {
  if (dp[n]) {
    return dp[n];
  }
  if (n > 2) {
    dp[n] = method1(n - 1, dp) + (n - 1) * method1(n - 2, dp);
    return dp[n];
  } else{
      return n;
  }
}

function method2(n){
    let dp = new Array(n+1);
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1]+(i-1)*dp[i-2];
    }
    return dp[n];
}

function method3(n){
    if(n<=2){
        return n;
    }
    let a=1,b=2,c=0,i;
    for(i=3;i<=n;i++){
        c = b+(i-1)*a;
        a=b;
        b=c;
    }
    return c;
}

let n = 5;
let arr = new Array(n);
console.log(method1(n,arr));
console.log(method2(n));
console.log(method3(n));