function method1(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    return (n-1)*(method1(n-1)+method1(n-2));
}

function method2(n){
    let arr = new Array(n+1);
    arr[0] = 0;
    arr[1] = 0;
    arr[2] = 1;
    let i;
    for(i=3;i<=n;i++){
        arr[i] = (i-1)*(arr[i-1]+arr[i-2]);
    }
   // console.log(arr);
    return arr[n];
}

function method3(n){
    let prev=1, prev2=0, cur;
    let i=3;
    while(i<=n){
        cur = (i-1)*(prev+prev2);
        prev2 = prev;
        prev = cur;
        i++;
    }
    return cur;
}

let n = 4;
console.log(method1(n));
console.log(method2(n));
console.log(method3(n));