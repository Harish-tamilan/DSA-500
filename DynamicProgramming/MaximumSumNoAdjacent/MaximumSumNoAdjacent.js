let max = 0;
let res = [];

function method1(arr, list, sum, ind){
    if(ind>=arr.length){
        if(sum>max){
            res = [...list];
            max = sum;
        }
        return;
    }
    let temp = [...list];
    temp.push(arr[ind]);
    method1(arr, temp, sum+arr[ind], ind+2);
    method1(arr, list, sum, ind+1);
}

function method2(arr){
    let i,n=arr.length,max=0;
    let tab = new Array(n);
    tab.fill(0);
    tab[0] = arr[0];

    for(i=1;i<n;i++){
        let temp=arr[i];
        if(i>1){
            temp += tab[i-2];
        }
        tab[i] = Math.max(temp, tab[i-1]);
        max = Math.max(max, tab[i]);
    }
    return max;
}

function method3(arr){
    let exc=arr[0], inc=0, i, n=arr.length, max;
    for(i=1;i<n;i++){
        max = Math.max(exc, inc+arr[i]);
        inc = exc;
        exc = max;
    }
    return max;
}

let ar = [3, 2, 5, 10, 7];
method1(ar, [], 0, 0);
console.log(max);
console.log(method2(ar));
console.log(method3(ar));