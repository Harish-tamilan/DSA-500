class Range{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}

function method1(arr) {
  let sum = 0,
    i,
    n = arr.length;
    let map = new Map();
    let res = []
    for(i=0;i<n;i++){
        sum+=arr[i];
        if(sum==0){
            let obj = new Range(0,i);
            res.push(obj);
        }
        let li = [];
        if(map.has(sum)){
            li = map.get(sum);
            console.log('line 23, li is ', li, ', sum is ', sum);
            for(let no of li){
                let obj = new Range(no+1,i);
                res.push(obj);
            }
        }
        li.push(i);
        map.set(sum, li);
    }
    let fin=[];
    for(let obj of res){
        fin.push(arr.slice(obj.start, obj.end+1));
    }
    return fin;
}

let arr = [6, -1, -3, 4, -2, 2, 4, 6, -12, -7];
console.log(method1(arr));
// let res = [];

// let obj1 = new Range(1,2);
// let obj2 = new Range(4,9);
// res.push(obj1);
// res.push(obj2);
// console.log(res);

