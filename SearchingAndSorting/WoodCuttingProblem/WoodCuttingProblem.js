function isValid(arr, m, d){
    let sum=0;
    for(let no of arr){
        if(no>d){
            sum += no-d;
        }
    }
    if(sum>=m)
        return true;
    return false;
}

function method1(arr, m){
    let l=0, r=0;
    for(let no of arr){
        r = Math.max(r, no);
    }
    let mid = Math.floor(l+(r-l)/2);
    while(l<=r){
        mid = Math.floor(l+(r-l)/2);
        console.log('l is ', l,' m is ', mid, ', r is ', r);
        if(isValid(arr, m, mid)){
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return l-1;
}
let arr = [4, 42, 40, 26, 46];
let m = 20;
console.log(method1(arr, m));