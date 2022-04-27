//O(n) time and O(n) space
function method1(arr, arr2, arr3){
    let set = new Set();
    for(let no of arr)
        set.add(no);
    let set2 = new Set();
    for(let no of arr2){
        set2.add(no);
    }
    let set3 = new Set();
    for(let no of arr3){
        set3.add(no);
    }
    let map = new Map();
    for(let no of set){
        if(map.has(no)){
            map.set(no, map.get(no)+1);
        }
        else{
            map.set(no,1);
        }
    }
    for(let no of set2){
        if(map.has(no)){
            map.set(no, map.get(no)+1);
        }
        else{
            map.set(no,1);
        }
    }
    for(let no of set3){
        if(map.has(no)){
            map.set(no, map.get(no)+1);
        }
        else{
            map.set(no,1);
        }
    }
    let res = [];
    map.forEach((value, key)=>{
        if(value==3){
            res.push(key);
        }
    })
    return res;
}

function method2(arr, arr2, arr3){
    let res = [];
    let i=0,j=0,k=0,n=arr.length,n2=arr2.length,n3=arr3.length;
    while(i<n && j<n2 && k<n3){
        while(i<n-1 && arr[i]==arr[i+1]){
            i++;
        }
        while(j<n2-1 && arr2[j]==arr2[j+1]){
            j++;
        }
        while(k<n3-1 && arr3[k]==arr3[k+1]){
            k++;
        }

        if (arr[i] == arr2[j] && arr2[j] == arr3[k]) {
            res.push(arr[i]);
            i++;
            j++;
            k++;
        }

        else if (arr[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr3[k]) {
            j++;
        }
        else {
            k++;
        }
    }
    return res;
}

var arr = [ 1, 5, 10, 20, 40, 80, 80 ];
var arr2 = [ 6, 7, 10, 20, 80, 80, 100 ];
var arr3 = [ 3, 4,10, 15, 20, 30, 70, 80, 80, 120 ];
console.log(method1(arr, arr2, arr3));
console.log(method2(arr, arr2, arr3));