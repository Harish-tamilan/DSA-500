function numberOfPainters(arr, num){
    let count=1;
    let sum=0, n=arr.length;
    for(let i=0;i<n;i++){
        sum += arr[i];
        if(sum>num){
            count++;
            sum=arr[i];
        }
    }
    return count;
}

function method1(arr, k){
    let n = arr.length;
    let l=0, r=0;
    for(let no of arr){
        l = Math.max(l, no)
        r += no;
    }
    console.log('l is ', l, ', r is ', r);
    while(l<r){
        let m = l+Math.floor((r-l)/2);
        let co = numberOfPainters(arr, m);
        if(co<=k){
            r=m;
        }else{
            l=m+1;
        }
    }
    return l;
}

let arr = [10, 10, 10, 10];
let m = 2;
console.log(method1(arr, m));