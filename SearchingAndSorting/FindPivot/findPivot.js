function findPivot(arr){
    let l=0,r=arr.length-1,m,n=arr.length;
    while(l<=r){
        m=Math.floor(l+(r-l)/2);
        if(m<n-1 && arr[m]>arr[m+1])
            return {
                index:m,
                element:arr[m]
            };
        if(arr[m]>=arr[l]){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return -1;
}

let arr = [1,2,3];
console.log(findPivot(arr));