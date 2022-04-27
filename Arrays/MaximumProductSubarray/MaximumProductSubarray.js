function method1(arr){
    let i,j,temp=1,n=arr.length,max=Number.MIN_VALUE;
    for(i=0;i<n;i++){
        temp=arr[i];
        max=Math.max(temp,max);
        for(j=i+1;j<n;j++){
            temp = temp*arr[j];
            max = Math.max(temp,max);
        }
    }
    return max;
}

function method2(arr){
    let temp1, temp2, min=arr[0], max=arr[0], product=Number.MIN_VALUE, i, n=arr.length;
    for(i=1;i<n;i++){
        temp1 = min*arr[i];
        temp2 = max*arr[i];
        min = Math.min(Math.min(temp1, temp2), arr[i]);
        max = Math.max(Math.max(temp2, temp1), arr[i]);
        console.log('i is ',i,', min is ', min,', max is ', max);
        product = Math.max(product, max);
    }
    return product;
}

let arr = [1, -2, -3, 0, 7, -8, -2];
console.log(method2(arr));
console.log(method1(arr));
