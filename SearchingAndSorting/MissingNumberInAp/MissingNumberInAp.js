function missingNumber(a, b, c){
    if(c==0){
        if(a==b)
            return 1;
        return 0;
    }
    if((b - a) % c == 0 && (b - a) / c >= 0)
        return 1;
    return 0;
}

console.log(missingNumber(1,2,3));