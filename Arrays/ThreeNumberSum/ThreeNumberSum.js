function method1(arr,val){
    let i,j,k,n=arr.length;
    let res = [];
    arr.sort((a,b)=>a-b);
    //console.log(arr);
    for(i=0;i<n;i++){
        j=i+1;
        k=n-1;
        while(j<k){
            //console.log('i is ', i,', j is ',j,', k is ',k);
            if((arr[i]+arr[j]+arr[k])==val)
            {
                res.push(arr[i]);
                res.push(arr[j]);
                res.push(arr[k]);
                return res;
            }
            else if((arr[i]+arr[j]+arr[k])>val){
                k--;
            }else{
                j++;
            }
        }
    }
    return res;
}

let arr = [1, 2, 3, 4, 5], sum=9;
console.log(method1(arr,sum));