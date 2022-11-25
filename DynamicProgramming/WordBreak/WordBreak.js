function wordBreak(set, str) {
    let n = str.length;
    let dp = new Array(n+1).fill(false);
    dp[0] = true;
    //console.log(dp);
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            if(dp[j] && set.has(str.substring(j,i))){
                dp[i] = true;
                break;
            }
        }
    }
    //console.log(dp);
    return dp[n];
}

let arr = [
  "i",
  "like",
  "sam",
  "sung",
  "samsung",
  "mobile",
  "ice",
  "cream",
  "icecream",
  "man",
  "go",
  "mango",
];
let s = "ilikeman";
let set = new Set();
for(let str of arr){
    set.add(str);
}
console.log(wordBreak(set, s));