function rainWaterTrapping(arr){
    let prev = arr[0], sum=0, i, n=arr.length,ind=0, next;
    for(i=1;i<n;i++){
        if(arr[i]<prev){
            sum += prev-arr[i];
        }else{
            prev = arr[i];
            ind=i;
        }
    }
    //console.log('sum is ', sum);
    if(ind!=n-1){
        sum -= (prev-arr[n-1]);
    }
    // console.log('sum is ', sum);
    // console.log('ind... is ', ind);
    next = arr[n-1];
    for(i=n-2;i>ind;i--){
        if(next>arr[i]){
            sum -= (prev-arr[i]);
            sum += next-arr[i];
        }else{
            sum -= (prev-arr[i]);
            next = arr[i];
        }
        //console.log('sum is ', sum);
    }
    return sum;
}
//               1     1  2  1     1  2  1  2 
let arr = [2,0,2];
console.log(rainWaterTrapping(arr));