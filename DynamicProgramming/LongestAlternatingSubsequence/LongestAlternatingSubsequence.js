function alternatingaMaxLength(arr,n){
    //code here
    let increasing = 1, decreasing = 1, i;
    for(i=1;i<n;i++){
        if(arr[i]>arr[i-1]){
            increasing = decreasing+1;
        }else if(arr[i]<arr[i-1]){
            decreasing = increasing+1;
        }
    }
    return Math.max(increasing, decreasing);
}