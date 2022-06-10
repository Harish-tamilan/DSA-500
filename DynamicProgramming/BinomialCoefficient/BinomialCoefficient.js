function method1(c,r){
    if(r>c){
        return 0;
    }
    if(c==r){
        return 1;
    }
    if(c==0||r==0){
        return 1;
    }
    return method1(c-1,r-1)+method1(c-1,r);
}

function method2(c,r){
    let arr = new Array(c+1);
    let i,j;
    for(i=0;i<=c;i++){
        arr[i] = new Array(r+1);
        arr[i].fill(0)
    }
   // console.log('arr is ', arr);
    for(i=0;i<=c;i++){
        for(j=0;j<=Math.min(i,r);j++){
            if(j==0 || i==j){
                arr[i][j] = 1;
            }else{
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
            }
        }
    }
    return arr[c][r]
}

console.log(method1(20,8));
console.log(method2(20,8));