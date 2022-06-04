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
        arr = new Array()
    }
}

console.log(method1(3,2));