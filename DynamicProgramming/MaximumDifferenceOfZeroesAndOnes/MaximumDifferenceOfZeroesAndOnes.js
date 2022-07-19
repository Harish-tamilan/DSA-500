function method1(str){
    let arr = str.split('');
    let i=0,j;
    for(let s of arr){
        if(s=='1'){
            arr[i]=-1;
        }else{
            arr[i]=1;
        }
        i++;
    }
    //console.log(arr);
    let sum=-1,temp=0;
    for(let no of arr){
        if(temp+no<0){
            temp=0;
        }else{
            temp += no;
        }
        sum = Math.max(sum, temp);
    }
    return sum>0?sum:-1;
}

let str = "11111";
console.log(method1(str));
