function method1(arr, c){
    let n = arr.length;
    let set = []
    let i;
    for(i=0;i<c;i++){
        set.push(arr[i]);
    }
    let sum = c;
    //let j=0;
    for(i=c;i<n;i++){
        if(set.includes(arr[i])){
            set.splice(1);
            sum+=1;
            set.push(arr[i])
        }else{
            set = [...set.slice(0, set.indexOf(arr[i]), ...set.slice(set.indexOf(arr[i])+1))];
            set.push(arr[i]);
        }
    }
    return sum;
}

let arr = [5, 0, 1, 3, 2, 4, 1, 0, 5];
let c = 4;
console.log(method1(arr, c));