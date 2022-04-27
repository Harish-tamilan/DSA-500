function SubsetArray(arr){
    let i=0,n=arr.length;
    let map = new Map();
    for(let no of arr){
        if(map.has(no)){
            map.set(no,map.get(no)+1);
        }else{
            map.set(no,1);
        }
    }
    for(let no of sub){
        if(map.has(no)){
            if(map.get(no)==0)
                return false;
            else
                map.set(no, map.get(no)-1);
        }
        else{
            return false;
        }
    }
    return true;
}

let arr = [10, 5, 2, 23, 19];
let sub = [19, 5, 3];
console.log(SubsetArray(arr));