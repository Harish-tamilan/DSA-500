class Count{
    constructor(e,c){
        this.e = e;
        this.c = c;
    }
}

function method1(arr,k){
    let countArr = [];
    let i=0,j,n=arr.length;
    for(let no of arr){
        
        for(i=0;i<countArr.length;i++){
            if(countArr[i].e==no){
                countArr[i].c += 1;
                break;
            }
        }
        if(i==countArr.length)
            if(countArr.length<k-1){
                let o = new Count(no, 1);
                countArr.push(o);
                continue;
            }
        if(i>=k-1){
            for(i=0;i<countArr.length;i++){
                if(countArr[i].c==0){
                    countArr[i].e = no;
                    countArr[i].c = 1;
                    break;
                }
            }
            if(i==k-1){
                for(i=0;i<countArr.length;i++){
                    countArr[i].c -= 1;
                }
            }
        }
    }
    console.log('countArr is ', countArr);
    let res = [];
    for(let obj of countArr){
        let co = 0;
        for(let no of arr){
            if(no==obj.e)
                co++;
        }
        if(co>n/k)
            res.push(obj.e);
    }
    return res;
}

let arr = [1, 1, 2, 2, 3, 5, 4,
    2, 2, 3, 1, 1, 1]
let k = 4;
console.log(method1(arr, k));