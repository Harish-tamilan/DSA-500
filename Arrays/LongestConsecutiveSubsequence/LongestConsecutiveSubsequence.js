function method1(arr){
    arr.sort(function(a, b){return a-b});
    console.log('arr is ', arr);
    let count=1,temp=1,i,n=arr.length;
    for(i=1;i<n;i++){
        if(arr[i]==arr[i-1]+1){
            temp++;
        }
        else{
            temp=1;
        }
        count = Math.max(count, temp);
    }
    return count;
}

function method2(arr){
    let set = new Set();
    let temp=0,count=0;
    for(let no of arr){
        set.add(no);
    }
    for(let no of arr){
        if(!set.has(no-1)){
            temp=1;
            let v=no+1;
            while(set.has(v)){
                temp++;
                v++;
            }
            count = Math.max(count,temp);
        }
    }
    return count;
}

let arr = [1, 9, 3, 10, 4, 20, 2];
console.log(method1(arr));
console.log(method2(arr));