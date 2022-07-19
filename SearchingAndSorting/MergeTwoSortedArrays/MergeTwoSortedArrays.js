function method2(arr, arr2){
    let res = [];
    let n=arr.length, n2=arr2.length, i=0, j=0;
    while(i<n && j<n2){
        if(arr[i]<arr2[j]){
            res.push(arr[i]);
            i++;
        } else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<n){
        res.push(arr[i]);
        i++;
    }

    while(j<n2){
        res.push(arr2[j])
        j++;
    }
    return res;
}

let arr = [10, 12];
let arr2 = [5, 18, 20];
console.log(method2(arr, arr2));
