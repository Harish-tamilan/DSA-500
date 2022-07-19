export function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function partition(arr, l, r, arr2){
    let i=l-1,j,pivot=arr[r];
    for(j=l;j<r;j++){
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
            swap(arr2,i,j);
        }
    }
    swap(arr,i+1,r);
    swap(arr2,i+1,r);
    return i+1;
}

export function quickSort(arr, l, r, arr2){
    if(l<r){
        let pi = partition(arr,l,r,arr2);
        quickSort(arr,l,pi-1,arr2);
        quickSort(arr,pi+1,r,arr2);
    }
}

function method1(arr){
    let start = [];
    let end = [];
    for(let ar of arr){
        start.push(ar[0]);
        end.push(ar[1]);
    }
    quickSort(arr, 0, arr.length-1, end);
    
}

let arr = [ [ 5, 24 ], [ 39, 60 ], [ 15, 28 ], [ 27, 40 ], [ 50, 90 ] ];
let arr2 = [3,4,5,1,2];
quickSort(arr2, 0, arr2.length-1);
console.log(arr2);