function method1(arr){
    arr.sort((a,b)=>a-b);
    let list = [];
    let n = arr.length;
    let l=0,r=n-1;
    while(l<r){
        list.push(arr[l]);
        list.push(arr[r]);
        l++;
        r--;
    }
    console.log('list is ', list);
    if(n%2!=0){
        list.push(arr[l]);
    }
    let sum = 0;
    for(l=0;l<n-1;l++){
        sum += Math.abs(list[l]-list[l+1]);
    }
    sum += Math.abs(list[n-1]-list[0]);
    return sum;
}

let arr =[1, 2, 4, 8];
console.log(method1(arr));