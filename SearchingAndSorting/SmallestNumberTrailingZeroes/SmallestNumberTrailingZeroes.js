function isPossible(num, n){
    let i=5;
    let count=0;
    while(i<=num){
        count += Math.floor(num/i);
        i *= 5;
    }
    return count>=n;
}

function method1(n){
    let r=n*5;
    let l=0;
    if(n==1)
        return 5;
    while(l<r){
        let m = Math.floor(l+(r-l)/2);
        if(isPossible(m, n)){
            r=m;
        } else{
            l=m+1;
        }
    }
    return l;
}

let i=6;
console.log(method1(i));