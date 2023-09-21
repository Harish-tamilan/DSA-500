function method1(arr, arr2){
    if(arr.length>arr2.length){
        return method1(arr2, arr);
    }
    let n = arr.length, n2 = arr2.length;
    let l=0, r=n;
    while(l<=r){
        let x = Math.floor((l+r)/2);
        let y = Math.floor((n+n2+1)/2)-x;
//        console.log("x is ", x);
//        console.log("y is ", y);
        let minx = x>0?arr[x-1]:Number.MIN_VALUE;
        let maxx = x<n?arr[x]:99999;
        let miny = y>0?arr2[y-1]:Number.MIN_VALUE;
        let maxy = y<n2?arr2[y]:99999;
//        console.log("minx is ", minx);
//        console.log("maxx is ", maxx);
//        console.log("miny is ", miny);
//        console.log("maxy is ", maxy);
        if(miny<=maxx && minx<=maxy){
            if((n+n2)%2==0){
                let num = Math.max(minx, miny);
                let num2 = Math.min(maxx, maxy);
                return Math.floor((num+num2)/2);
            }else{
                return Math.max(minx, miny);
            }
        }else if(miny>maxx){
            l=x+1;
        }else{
            r=x-1;
        }
    }
}

let arr = [2, 3, 5, 8]
let arr2 = [10, 12, 14, 16, 18, 20];
console.log(method1(arr, arr2));