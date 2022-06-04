function method1(arr, arr2){
    let res=[];
    for(let no of arr){
        res.push(no);
    }
    for(let no of arr2){
        res.push(no);
    }
    res.sort();
    return res;
}

let arr = [];
let arr2 = [];
console.log(method1(arr, arr2));
