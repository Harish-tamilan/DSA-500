function isValid(arr, limit, count){
    let students=1,temp=0;
    for(let no of arr){
        temp+=no;
        if(temp>limit){
            students++;
            temp=no;
        }
    }
    return students<=count;
}

function method1(arr, count){
    let l=0,r=0,m;
    arr.sort((a,b)=>a-b);
    for(let no of arr){
        l = Math.max(l, no);
        r += no;
    }
    console.log(arr);
    //console.log('l is ', l, ', r is ', r);
    let ans=0;
    while(l<=r){
        m = Math.floor(l+(r-l)/2);
        let bool = isValid(arr, m, count);
        console.log('m is ', m,', bool is ', bool);
        if(bool){
            ans=m;
            r=m-1;
        }else{
            l=m+1;
        }
    }
    return ans;
}

let arr = [15,17,20];
let count = 2;
console.log(method1(arr, count));