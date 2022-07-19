function method1(arr, n){
    let prod = new Array(n);
    let zCount=0;
    let mul=1;
    for(let no of arr){
        if(no==0){
            zCount+=1;
            if(zCount==2){
                break;
            }
        }else{
            mul *= no;
        }
    }
    for(let i=0;i<n;i++){
        if(zCount==2){
            prod[i] = 0;
        } else if(zCount==1){
            if(arr[i]==0){
                prod[i] = mul;
            }else{
                prod[i] = 0;
            }
        } else{
            prod[i] = mul/arr[i];
        }
    }
    return prod;
}

function method2(arr, n){
    let left = new Array(n);
    let right = new Array(n);
    if(n==1){
        return 1;
    }
    left[0] = arr[0];
    right[n-1] = arr[n-1];
    for(i=1;i<n;i++){
        left[i] = left[i-1]*arr[i];
    }
    for(i=n-2;i>=0;i--){
        right[i] = right[i+1]*arr[i];
    }
    let prod = new Array(n);
    prod[0] = right[1];
    prod[n-1] = left[n-2];
    for(i=1;i<n-1;i++){
        prod[i] = left[i-1]*right[i+1];
    }
    return prod;
}

let arr = [85];
console.log(method1(arr, arr.length));
console.log(method2(arr, arr.length));
