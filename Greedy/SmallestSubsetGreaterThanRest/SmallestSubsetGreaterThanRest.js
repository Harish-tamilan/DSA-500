function method1(arr){
    arr.sort((a,b)=>a-b);
    let sum=0;
    for(let no of arr){
        sum += no;
    }
    let temp=0;
    let count=0;
    let n = arr.length;
    for(let i=n-1;i>=0;i--){ 
        temp += arr[i];   
        count++;
        if(temp>sum-temp){
            return count;
        }
    }
    return count;
}

let arr = [2, 1, 2];
console.log(method1(arr));