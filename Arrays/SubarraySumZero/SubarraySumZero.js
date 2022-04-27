function method1(arr){
    let i,j,n=arr.length,sum=0;
    for(i=0;i<n;i++){
        sum=arr[i];
        for(j=i+1;j<n;j++){
            if(sum==0){
                return true;
            }
            sum+=arr[j];
        }
    }
    return false;
}

function method2(arr){
    let set = new Set();
    let sum=0;
    for(let no of arr){
        sum+=no;
        if(sum==0 || set.has(sum)){
            return true;
        }
        set.add(sum);
    }
    return false;
}

let arr = [-3, 2, 3, 1, 6];
console.log(method1(arr));
console.log(method2(arr));