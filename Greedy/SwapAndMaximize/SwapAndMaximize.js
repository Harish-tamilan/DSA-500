function method1(arr){
    arr.sort((a,b)=>a-b);
    let n=arr.length,i=0;
    let l=0,r=n-1,temp=0;
    while(l<r){
        temp += Math.abs(arr[l]-arr[r]);
        console.log('l : ', arr[l], ', r : ', arr[r], ', temp : ', temp);
        if(i%2==0){
            l++;
        }else{
            r--;
        }
        i++;
    }
    temp += Math.abs(arr[l]-arr[0]);
    return temp;
}



let arr = [10, 12];
console.log(method1(arr));